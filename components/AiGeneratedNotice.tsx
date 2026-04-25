type AiGeneratedNoticeProps = {
  className?: string
  textClassName?: string
}

export default function AiGeneratedNotice({
  className = '',
  textClassName = '',
}: AiGeneratedNoticeProps) {
  return (
    <div
      className={`pointer-events-none absolute bottom-3 right-3 z-10 md:bottom-4 md:right-4 lg:bottom-5 lg:right-5 ${className}`.trim()}
    >
      <p className={`text-[6px] font-light tracking-[0.04em] text-white/30 md:text-white/50 ${textClassName}`.trim()}>
        この画像はAIで生成しています
      </p>
    </div>
  )
}
