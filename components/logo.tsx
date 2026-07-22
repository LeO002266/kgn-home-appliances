// KGN monogram mark — purple rounded square with gold lettering,
// matching the shop signboard and the site favicon (public/icon.svg).
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="kgn-logo-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b2ab5" />
          <stop offset="100%" stopColor="#3d1d86" />
        </linearGradient>
        <linearGradient id="kgn-logo-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="45%" stopColor="#f5b301" />
          <stop offset="100%" stopColor="#e09b00" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#kgn-logo-bg)" />
      <text
        x="24"
        y="25"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="17"
        letterSpacing="0.5"
        fill="url(#kgn-logo-gold)"
      >
        KGN
      </text>
    </svg>
  )
}
