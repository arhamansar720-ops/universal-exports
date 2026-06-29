export default function GlobeSVG({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="22" fill="url(#gb)" />
      <ellipse cx="22" cy="22" rx="9" ry="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" fill="none" />
      <line x1="0" y1="22" x2="44" y2="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
      <line x1="4" y1="12" x2="40" y2="12" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="4" y1="32" x2="40" y2="32" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <defs>
        <linearGradient id="gb" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a6ed8" />
          <stop offset="1" stopColor="#0e4fa0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
