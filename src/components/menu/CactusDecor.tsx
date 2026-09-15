export function CactusDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 96"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M32 92V26" />
      <path d="M32 62c-9 0-14-5-14-14v-8" />
      <path d="M32 50c8 0 12-4 12-12v-6" />
      <path d="M18 40v-6a4 4 0 0 1 8 0" />
      <path d="M44 32v-5a4 4 0 0 1 8 0v9" />
      <path d="M32 26a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />
      <path d="M22 92h20" />
    </svg>
  );
}

export function CactusDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-primary/40 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-current sm:w-24" />
      <CactusDecor className="h-6 w-4" />
      <span className="h-px w-16 bg-current sm:w-24" />
    </div>
  );
}
