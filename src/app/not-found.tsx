import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        gap: "8px",
      }}
    >
      <span
        style={{
          color: "var(--accent)",
          fontWeight: 700,
          fontSize: 13,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        ✦ Drive Test
      </span>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(48px, 10vw, 88px)",
          margin: "8px 0 4px",
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: 20, maxWidth: 420 }}>
        We couldn&rsquo;t find that page. It may have moved, or the link may be out of date.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "linear-gradient(120deg, var(--accent), var(--accent-2))",
            color: "#fff",
            fontWeight: 700,
            padding: "12px 26px",
            borderRadius: "var(--radius-pill)",
          }}
        >
          ← Back home (EN)
        </Link>
        <Link
          href="/sv/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid var(--border)",
            background: "var(--card)",
            color: "var(--text)",
            fontWeight: 700,
            padding: "12px 26px",
            borderRadius: "var(--radius-pill)",
          }}
        >
          Till startsidan (SV)
        </Link>
      </div>
    </main>
  );
}
