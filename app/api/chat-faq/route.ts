import { NextResponse } from "next/server"

type FaqEntry = {
  keywords: string[]
  reply: string
}

const faqEntries: FaqEntry[] = [
  {
    keywords: ["サービス", "メニュー", "提供", "支援"],
    reply:
      "主なサービスは「AI/DX相談」「プロダクト開発」「SNS運用」「Web制作」などです。トップページの各セクションで概要をご覧いただけます。",
  },
  {
    keywords: ["upmo", "アップモ","アプモ","あぷも"],
    reply:
      "Upmo は社内ナレッジを活用して業務改善を支援するAIソリューションです。プロダクト紹介セクションに概要を掲載しています。",
  },
  {
    keywords: ["signal", "シグナル"],
    reply:
      "Signal. はSNS運用の90%を自動化するAIツールです。プロダクト一覧の紹介カードから公式サイトへアクセスいただけます。",
  },
  {
    keywords: ["所在地", "住所", "アクセス"],
    reply:
      "所在地は 〒810-0001 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル7階 です。会社概要ページにアクセス情報も掲載しています。",
  },
  {
    keywords: ["会社概要", "mogcia", "企業情報", "沿革"],
    reply:
      "MOGCIA の沿革や理念は「About」「Company」ページにまとめています。チーム体制もそちらでご確認いただけます。",
  },
  {
    keywords: ["問い合わせ", "お問い合わせ", "連絡", "相談"],
    reply:
      "お問い合わせはチャット下部の連絡先リンク、またはヘッダーの Contact ページからご連絡いただけます。メール: info@mogcia.jp / 電話: 092-517-9804 です。",
  },
]

const fallbackReply =
  "ありがとうございます。Webサイトに掲載されていない内容の場合は、メール（info@mogcia.jp）やお問い合わせフォームからお気軽にご連絡ください。オンラインミーティングのご予約も承っています。"

export async function POST(request: Request) {
  try {
    const { message } = (await request.json()) as { message?: string }

    if (!message || typeof message !== "string") {
      return NextResponse.json({ reply: fallbackReply }, { status: 200 })
    }

    const lowered = message.toLowerCase()

    const matched = faqEntries.find(entry =>
      entry.keywords.some(keyword => lowered.includes(keyword.toLowerCase())),
    )

    return NextResponse.json(
      {
        reply: matched?.reply ?? fallbackReply,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[chat-faq] error:", error)
    return NextResponse.json({ reply: fallbackReply }, { status: 200 })
  }
}

