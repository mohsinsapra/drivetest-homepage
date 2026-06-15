// Cloudflare Worker — generic CORS pass-through proxy for Groq (BYOK: stores nothing).
// Forwards ANY path to api.groq.com, so both /openai/v1/models (GET) and
// /openai/v1/chat/completions (POST) work. Deploy free at workers.cloudflare.com,
// then set the app's "API base URL" to this Worker's origin (https://xxx.workers.dev).
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

export default {
  async fetch(req) {
    if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });

    const url = new URL(req.url);
    const target = 'https://api.groq.com' + url.pathname + url.search;
    const upstream = await fetch(target, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.get('authorization') || '', // user's own key, passed through
      },
      body: req.method === 'POST' ? await req.text() : undefined,
    });

    const headers = new Headers(upstream.headers);
    for (const k in CORS) headers.set(k, CORS[k]);
    return new Response(upstream.body, { status: upstream.status, headers });
  },
};
