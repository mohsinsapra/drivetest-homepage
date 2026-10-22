/** Trustpilot's green star, for the "Review us on Trustpilot" button. */
export default function TrustpilotStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path fill="#00b67a" d="M12 1.5l2.47 7.6h7.98l-6.46 4.7 2.47 7.6L12 16.7l-6.46 4.7 2.47-7.6-6.46-4.7h7.98z" />
      <path fill="#005128" d="M16.24 14.05l-.55-1.69L12 16.7z" />
    </svg>
  );
}
