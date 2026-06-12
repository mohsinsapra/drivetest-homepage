/* Drive Test homepage — Three.js "night drive" hero scene.
   Endless road grid scrolling toward the camera + drifting particles.
   Theme-aware (reads data-theme), pauses off-screen, respects reduced motion. */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.min.js';

const canvas = document.getElementById('hero-canvas');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (canvas && !reduced) init();

function themeColors() {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  return dark
    ? {
        gridCenter: 0x8d85ff, grid: 0x39336e, fog: 0x0b0a15,
        stars: 0xb9b3ff, lights: 0xffd60a,
        gridOpacity: 0.85, starOpacity: 0.9
      }
    : {
        gridCenter: 0x5a51fe, grid: 0xb9b3f2, fog: 0xeceaff,
        stars: 0x8a82e8, lights: 0xe8a800,
        gridOpacity: 0.5, starOpacity: 0.55
      };
}

function init() {
  const isMobile = window.innerWidth < 768;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 120);
  camera.position.set(0, 1.35, 5.5);
  camera.lookAt(0, 0.6, -30);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);

  const GRID_SIZE = 60;
  const DIVISIONS = isMobile ? 36 : 56;
  let colors = themeColors();

  scene.fog = new THREE.Fog(colors.fog, 8, 55);

  // Two grids leap-frogging for an endless road
  const grids = [0, 1].map((i) => {
    const g = new THREE.GridHelper(GRID_SIZE, DIVISIONS, colors.gridCenter, colors.grid);
    g.material.transparent = true;
    g.material.opacity = colors.gridOpacity;
    g.position.set(0, 0, -i * GRID_SIZE);
    scene.add(g);
    return g;
  });

  // Star/particle field above the horizon
  function makePoints(count, color, size, yMin, yMax, opacity) {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 90;
      pos[i * 3 + 1] = yMin + Math.random() * (yMax - yMin);
      pos[i * 3 + 2] = -Math.random() * 80;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color, size, transparent: true, opacity,
      sizeAttenuation: true, depthWrite: false
    });
    const pts = new THREE.Points(geo, mat);
    scene.add(pts);
    return pts;
  }
  const stars = makePoints(isMobile ? 140 : 320, colors.stars, 0.10, 1.5, 24, colors.starOpacity);
  const taxiLights = makePoints(isMobile ? 12 : 26, colors.lights, 0.16, 0.2, 3.5, 0.9);

  function applyTheme() {
    colors = themeColors();
    scene.fog.color.setHex(colors.fog);
    grids.forEach((g) => {
      // GridHelper stores both colors in vertex colors; easiest is to rebuild materials' color via dispose+recreate.
      const fresh = new THREE.GridHelper(GRID_SIZE, DIVISIONS, colors.gridCenter, colors.grid);
      g.geometry.dispose();
      g.geometry = fresh.geometry;
      g.material.dispose();
      g.material = fresh.material;
      g.material.transparent = true;
      g.material.opacity = colors.gridOpacity;
    });
    stars.material.color.setHex(colors.stars);
    stars.material.opacity = colors.starOpacity;
    taxiLights.material.color.setHex(colors.lights);
  }

  new MutationObserver(applyTheme).observe(document.documentElement, {
    attributes: true, attributeFilter: ['data-theme']
  });

  // Mouse parallax (desktop only)
  let tx = 0, ty = 0, cx = 0, cy = 0;
  if (!isMobile) {
    window.addEventListener('mousemove', (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  function resize() {
    const w = canvas.clientWidth || canvas.parentElement.clientWidth;
    const h = canvas.clientHeight || canvas.parentElement.clientHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // Pause rendering when hero is off-screen or tab hidden
  let visible = true;
  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
  }, { threshold: 0 }).observe(canvas);

  const SPEED = 4.2; // units per second
  const clock = new THREE.Clock();

  function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.05);
    if (!visible || document.hidden) return;

    grids.forEach((g) => {
      g.position.z += SPEED * dt;
      if (g.position.z >= GRID_SIZE) g.position.z -= GRID_SIZE * 2;
    });

    stars.rotation.y += dt * 0.008;
    taxiLights.position.z += SPEED * dt * 0.55;
    if (taxiLights.position.z > 30) taxiLights.position.z = 0;

    cx += (tx - cx) * 0.04;
    cy += (ty - cy) * 0.04;
    camera.position.x = cx * 1.1;
    camera.position.y = 1.35 - cy * 0.4;
    camera.lookAt(cx * 0.5, 0.6, -30);

    renderer.render(scene, camera);
  }
  tick();
}
