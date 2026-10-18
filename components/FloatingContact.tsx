"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type ChatMessage = {
  sender: "user" | "bot"
  text: string
}

const initialMessage: ChatMessage = {
  sender: "bot",
  text: "こんにちは！mogcia AIです。サービスのこと、料金のこと、どこから相談すればいいか、なんでも聞いてください。",
}

const quickQuestions = [
  ["どんなサービスがある？", "#cfe8ff"],
  ["料金を知りたい", "#efcfd9"],
  ["事例を見たい", "#d9d2eb"],
  ["人と話したい", "#ffffff"],
]

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])

  const ask = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isLoading) return

    setMessages(previous => [...previous, { sender: "user", text: trimmed }])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat-faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      })
      if (!response.ok) throw new Error("Failed to fetch reply")
      const data = (await response.json()) as { reply: string }
      setMessages(previous => [...previous, { sender: "bot", text: data.reply }])
    } catch (error) {
      console.error(error)
      setMessages(previous => [...previous, {
        sender: "bot",
        text: "ありがとうございます。詳しい内容はLINEまたはお問い合わせフォームから担当者におつなぎできます。",
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void ask(input)
  }

  const reset = () => {
    setMessages([initialMessage])
    setInput("")
    setIsLoading(false)
  }

  return <>
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      className={`fixed bottom-5 right-4 z-[1900] flex items-center gap-2 rounded-full bg-ink py-2 pl-2 pr-5 text-sm font-black text-white shadow-[0_20px_40px_-16px_rgba(30,41,59,.55)] transition-all hover:-translate-y-1 md:bottom-8 md:right-8 md:text-base ${isOpen ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100"}`}
      aria-expanded={isOpen}
      aria-controls="floating-contact-panel"
    >
      <Image src="/character-icon.png" alt="" width={52} height={52} className="h-11 w-11 rounded-full object-cover md:h-12 md:w-12"/>
      AIに相談する
    </button>

    {isOpen ? <button type="button" onClick={() => setIsOpen(false)} aria-label="チャットを閉じる" className="fixed inset-0 z-[1890] bg-ink/20 backdrop-blur-[1px]"/> : null}

    {isOpen ? <aside
      id="floating-contact-panel"
      role="dialog"
      aria-label="mogcia AI チャット"
      className="fixed inset-x-3 bottom-3 z-[1901] flex max-h-[calc(100dvh-1.5rem)] flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_50px_90px_-40px_rgba(30,41,59,.55)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:h-[min(760px,calc(100dvh-3rem))] sm:w-[440px]"
    >
      <header className="flex shrink-0 items-center gap-3 bg-ink px-5 py-4 text-white">
        <Image src="/character-icon.png" alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover"/>
        <div className="min-w-0 flex-1"><h2 className="font-logo text-lg font-bold">mogcia AI</h2><p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/75"><span className="h-2 w-2 rounded-full bg-[#7ee2a8]"/>ふだんは数秒でお返事します</p></div>
        <button type="button" onClick={reset} className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold hover:bg-white/20">リセット</button>
        <button type="button" onClick={() => setIsOpen(false)} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xl hover:bg-white/20" aria-label="閉じる">×</button>
      </header>

      <div className="flex min-h-0 flex-1 flex-col bg-surface">
        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4 sm:p-5">
          {messages.length === 1 ? <div className="flex flex-col items-center pb-1 text-center"><Image src="/character-float.png" alt="手をふるmogciaのキャラクター" width={120} height={102} className="h-24 w-28 object-contain"/><p className="text-[11px] font-bold text-ink-soft">AIが答えます。むずかしいことは担当者におつなぎします。</p></div> : null}
          {messages.map((message,index)=><div key={`${message.sender}-${index}-${message.text}`} className={`flex items-end gap-2 ${message.sender === "user" ? "justify-end" : ""}`}>
            {message.sender === "bot" ? <Image src="/character-icon.png" alt="" width={30} height={30} className="h-8 w-8 shrink-0 rounded-full object-cover"/> : null}
            <p className={`max-w-[78%] px-4 py-3 text-sm font-medium leading-7 shadow-sm ${message.sender === "user" ? "rounded-[1.25rem_1.25rem_.35rem_1.25rem] bg-ink text-white" : "rounded-[1.25rem_1.25rem_1.25rem_.35rem] bg-white text-ink"}`}>{message.text}</p>
          </div>)}
          {isLoading ? <div className="flex items-end gap-2"><Image src="/character-icon.png" alt="" width={30} height={30} className="h-8 w-8 rounded-full"/><p className="rounded-[1.25rem_1.25rem_1.25rem_.35rem] bg-white px-4 py-3 text-sm text-ink-soft">回答を準備しています…</p></div> : null}
          {messages.length > 1 ? <div className="flex flex-wrap gap-2 pl-10"><Link href="/services" onClick={() => setIsOpen(false)} className="rounded-full bg-white px-3 py-2 text-xs font-bold">サービスを見る →</Link><Link href="/works" onClick={() => setIsOpen(false)} className="rounded-full bg-white px-3 py-2 text-xs font-bold">事例を見る →</Link><Link href="/contact" onClick={() => setIsOpen(false)} className="rounded-full bg-white px-3 py-2 text-xs font-bold">人に相談する →</Link></div> : null}
        </div>

        <div className="shrink-0 border-t border-ink/10 bg-white px-4 pt-3"><div className="flex flex-wrap gap-2">{quickQuestions.map(([question,color])=><button type="button" key={question} onClick={() => void ask(question)} disabled={isLoading} className="rounded-full px-3 py-2 text-xs font-bold disabled:opacity-50" style={{backgroundColor:color}}>{question}</button>)}</div></div>
        <form onSubmit={handleSubmit} className="flex shrink-0 items-center gap-2 bg-white p-4 pt-3"><label className="min-w-0 flex-1"><span className="sr-only">メッセージ</span><input value={input} onChange={event => setInput(event.target.value)} placeholder="メッセージを入力" className="h-12 w-full rounded-full border border-ink/15 bg-surface px-5 text-sm outline-none focus:ring-2 focus:ring-ink/30"/></label><button type="submit" aria-label="送信" data-mogcia-id="chat-submit" data-mogcia-event="chat_submit" disabled={isLoading || !input.trim()} className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-xl text-white disabled:opacity-40">→</button></form>
      </div>
    </aside> : null}
  </>
}
