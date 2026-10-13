export function WidgetIcon({ name }: { name: string }) {
  const p = { viewBox: "0 0 32 32", width: 32, height: 32, fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "exam")
    return (
      <svg {...p}>
        <rect x="6" y="4" width="20" height="24" rx="1" />
        <path d="M10 10h12M10 15h12M10 20h7" />
        <path d="M19 24l2 2 4-4" />
      </svg>
    );
  if (name === "licence")
    return (
      <svg {...p}>
        <rect x="3" y="7" width="26" height="18" rx="1.5" />
        <circle cx="11" cy="15" r="3" />
        <path d="M6.5 22c.6-2.4 2.3-3.5 4.5-3.5s3.9 1.1 4.5 3.5M19 13h7M19 17h7M19 21h4" />
      </svg>
    );
  return (
    <svg {...p}>
      <circle cx="16" cy="10" r="4" />
      <path d="M7 27c0-5 3.5-8.5 9-8.5s9 3.5 9 8.5" />
      <path d="M13 22l3 3 3-3" />
    </svg>
  );
}
