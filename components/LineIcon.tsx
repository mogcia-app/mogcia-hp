type LineIconProps = {
  className?: string
}

export default function LineIcon({ className = 'h-5 w-5' }: LineIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" className={className} fill="none">
      <path
        fill="currentColor"
        d="M18 4C9.72 4 3 9.57 3 16.43c0 6.15 5.34 11.3 12.56 12.27.49.1 1.15.33 1.32.75.15.38.1.98.05 1.37l-.21 1.3c-.07.38-.3 1.51 1.3.82 1.6-.68 8.61-5.08 11.75-8.7C31.94 21.85 33 19.43 33 16.43 33 9.57 26.28 4 18 4Z"
      />
      <circle cx="11.5" cy="16.5" r="1.8" fill="white" />
      <circle cx="18" cy="16.5" r="1.8" fill="white" />
      <circle cx="24.5" cy="16.5" r="1.8" fill="white" />
    </svg>
  )
}
