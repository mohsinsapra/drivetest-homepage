import Link from "next/link";
import Container from "@/components/ui/Container";
import Chevron from "@/components/landing/Chevron";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  background: "var(--card)",
  border: "1px solid var(--brand)",
  padding: "12px 16px",
  color: "var(--brand-ink)",
  fontWeight: 700,
  textDecoration: "underline",
} as const;

export default function NotFound() {
  return (
    <main id="main">
      <Container>
        <div style={{ maxWidth: 720, padding: "0 0 64px" }}>
          <Breadcrumbs items={[{ label: "Home / Startsida", href: "/" }, { label: "404" }]} />
          <h1 style={{ fontSize: 35, fontWeight: 600, letterSpacing: 0, color: "var(--brand)", margin: "16px 0 12px" }}>
            Page not found / Sidan hittades inte
          </h1>
          <p style={{ fontWeight: 700, fontSize: 18, margin: "0 0 8px" }}>We could not find the page you were looking for. It may have moved, or the link may be out of date.</p>
          <p style={{ fontWeight: 700, fontSize: 18, margin: "0 0 24px" }}>Vi hittade inte sidan du letade efter. Den kan ha flyttats, eller så är länken inaktuell.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link href="/" style={linkStyle}>
              <span>Go to the start page (English)</span>
              <Chevron />
            </Link>
            <Link href="/sv/" style={linkStyle}>
              <span>Till startsidan (svenska)</span>
              <Chevron />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
