"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type ChatMessage = {
  sender: "user" | "bot"
  text: string
}

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "こんにちは！MOGCIAのチャットサポートです。ご質問があればお気軽にメッセージをお送りください。",
    },
  ])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) {
      return
    }

    setMessages(prev => [...prev, { sender: "user", text: trimmed }])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat-faq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmed }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch reply")
      }

      const data = (await response.json()) as { reply: string }
      setMessages(prev => [...prev, { sender: "bot", text: data.reply }])
    } catch (error) {
      console.error(error)
      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: "ありがとうございます。詳細についてはメール（info@mogcia.jp）またはお問い合わせフォームからご連絡ください。",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-4 right-6 z-[1900] sm:bottom-5 sm:right-32 md:bottom-6 md:right-8">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative z-0 flex h-14 w-14 items-center justify-center overflow-visible rounded-full bg-white shadow-[0_20px_55px_rgba(24,32,56,0.3)] transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-900/20 sm:h-16 sm:w-16 md:h-20 md:w-20"
            aria-expanded={isOpen}
            aria-controls="floating-contact-panel"
          >
            <span className="pointer-events-none absolute -inset-3 -z-10 rounded-full bg-gradient-to-br from-[#f6e27a]/40 via-[#d2c7ff]/30 to-transparent blur-2xl opacity-80 sm:-inset-4" />
            <Image
              src="/m.png"
              alt="お問い合わせ"
              width={56}
              height={56}
              sizes="(min-width: 768px) 56px, (min-width: 640px) 48px, 40px"
              className="relative h-10 w-10 -translate-y-[1px] object-contain sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
          </button>
          <div className="mt-2 text-[8px] uppercase tracking-[0.35em] text-gray-400 sm:text-[9px] md:text-[10px]">
            Ask
          </div>
        </div>
      )}

      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close contact overlay"
          className="fixed inset-0 z-[1890] bg-black/15 backdrop-blur-[1px]"
        ></button>
      )}

      <div
        id="floating-contact-panel"
        className={`fixed bottom-24 right-4 z-[1899] w-[calc(100vw-64px)] max-w-[380px] origin-bottom-right border border-gray-200 bg-white p-4 shadow-[0_28px_65px_rgba(24,32,56,0.22)] transition-all duration-300 sm:right-6 sm:w-[320px] sm:p-5 md:right-8 md:w-[360px] md:p-6 ${
          isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Chat</p>
            <h3 className="text-lg font-light text-gray-900">お問い合わせチャット</h3>
            <p className="text-[10px] text-gray-500">
              解決しない場合は <Link
                href="/contact"
                data-mogcia-id="chat-contact-form"
                data-mogcia-event="contact_click"
                className="underline decoration-gray-300 hover:decoration-gray-900"
              >
                お問い合わせフォーム
              </Link>をご利用ください。
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="hidden rounded border border-gray-200 px-2 py-[2px] text-[10px] text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900 sm:inline-flex"
              aria-label="Close contact chat"
            >
              CLOSE
            </button>
          </div>
        </div>

        <div className="mt-4 flex h-[340px] flex-col gap-4 sm:h-[360px] md:h-[420px]">
          <div className="flex-1 space-y-3 overflow-y-auto border border-gray-100 bg-gray-50/60 p-3">
            {messages.map((message, index) => (
              <div
                key={`${message.sender}-${index}-${message.text}`}
                className={`flex items-start gap-3 ${message.sender === "user" ? "justify-end" : ""}`}
              >
                {message.sender === "bot" && (
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center">
                    <Image
                      src="/m.png"
                      alt="MOGCIA"
                      width={24}
                      height={24}
                      sizes="24px"
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 text-[12px] leading-relaxed shadow-sm ${
                    message.sender === "user" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="max-w-[70%] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 shadow-sm">
                回答を準備しています...
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <textarea
              value={input}
              onChange={event => setInput(event.target.value)}
              rows={1}
              placeholder="メッセージを入力してください"
              className="w-full resize-none border border-gray-200 px-3 py-2 text-[10px] focus:outline-none focus:ring-2 focus:ring-gray-900/40"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center whitespace-nowrap rounded border border-gray-900 px-3 py-2 text-[11px] text-gray-900 transition-colors hover:bg-gray-900 hover:text-white disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400 disabled:hover:bg-transparent"
            >
              {isLoading ? "送信中..." : "送信"}
            </button>
          </form>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="mt-3 inline-flex w-full items-center justify-center rounded border border-gray-200 px-3 py-2 text-[11px] text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900 sm:hidden"
        >
          CLOSE
        </button>
      </div>
    </>
  )
}
