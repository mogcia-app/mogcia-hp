import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const sections = [
  {
    title: '1. 個人情報の利用目的',
    body: `当社は、サービスに関するお問い合わせ対応、提案・契約・請求手続き、採用活動、イベントやセミナーのご案内など、事業運営に必要な範囲で個人情報を利用いたします。利用目的を超えて個人情報を取り扱うことはありません。`,
  },
  {
    title: '2. 取得する情報',
    body: `当社は、お名前、会社名、所属、役職、メールアドレス、電話番号、住所などのお問い合わせ時にご提供いただく情報、アクセスログやCookie等の技術情報、ならびに業務遂行の過程で必要となる契約に付随する情報を取得します。`,
  },
  {
    title: '3. 情報の管理と保護',
    body: `漏えい、滅失、毀損などを防ぐために、適切な技術的・組織的安全管理措置を講じています。SSL通信・アクセス制限・ログ管理などを実施し、必要に応じて従業員への教育を継続しています。`,
  },
  {
    title: '4. 第三者提供',
    body: `法令に基づく場合や、お客様の同意がある場合、当社業務の委託先に必要な範囲で提供する場合を除き、個人情報を第三者に提供することはありません。委託先に対しては適切な監督を行います。`,
  },
  {
    title: '5. 個人情報の開示・訂正・利用停止等',
    body: `ご本人からの請求に応じ、保有する個人情報の開示、訂正、利用停止、削除等を法令の範囲内で速やかに対応します。ご希望の際は下記お問い合わせ窓口までご連絡ください。`,
  },
  {
    title: '6. クッキー（Cookie）等の利用',
    body: `当社ウェブサイトでは、利用状況の把握やサービス向上のためにCookieや類似技術を使用する場合があります。ブラウザの設定によりCookieの受け入れを拒否することができますが、サービスの一部が正常に機能しない場合があります。`,
  },
  {
    title: '7. プライバシーポリシーの更新',
    body: `法令の改正やサービス内容の変更に応じて、本ポリシーを改定することがあります。重要な変更がある場合は、当社ウェブサイト上で告知いたします。`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-85"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at top, rgba(255,255,255,0.25), transparent 55%)' }}></div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-3xl px-6 text-center text-white space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Privacy Policy</p>
            <h1 className="text-3xl md:text-5xl font-light tracking-wide">プライバシーポリシー</h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              株式会社MOGCIA（以下、「当社」）は、お客様やパートナーの皆さまからお預かりする個人情報を適切に管理し、安心してサービスをご利用いただくために、以下の方針を定めます。
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="group relative border border-gray-200 bg-white px-10 md:px-16 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Policy Overview</p>
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900">個人情報保護に関する基本方針</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                当社は関連法令・ガイドラインを遵守し、取得した個人情報を適正に取り扱います。利用目的を明確にし、必要な範囲で取得・利用・保存するとともに、最新の安全管理措置を講じることで信頼性の高いサービス提供を目指します。
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {sections.map(section => (
              <div
                key={section.title}
                className="group relative border border-gray-200 bg-white px-8 md:px-12 py-12 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <h3 className="text-lg md:text-xl font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {section.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="group relative border border-gray-200 bg-white px-10 md:px-16 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10 text-sm md:text-base text-gray-600 leading-relaxed">
              <h3 className="text-lg md:text-xl font-light text-gray-900 tracking-wide">お問い合わせ先</h3>
              <p>
                プライバシーポリシーに関するご質問・開示等のご依頼は、下記窓口までご連絡ください。
              </p>
              <div className="space-y-2">
                <p>株式会社MOGCIA 個人情報保護担当</p>
                <p>〒810-0001 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル7階</p>
                <p>TEL: <a href="tel:092-517-9804" className="underline decoration-gray-300 hover:decoration-gray-900">092-517-9804</a></p>
                <p>MAIL: <a href="mailto:info@mogcia.jp" className="underline decoration-gray-300 hover:decoration-gray-900">info@mogcia.jp</a></p>
              </div>
              <p className="text-xs text-gray-400">制定日: 2025年4月1日</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}


