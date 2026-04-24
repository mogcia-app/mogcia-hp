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
    <main className="bg-[#f7f7f5] text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Privacy Policy</p>
              <h1 className="text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                プライバシーポリシー
              </h1>
            </div>

            <div className="space-y-8 border-t border-neutral-200 pt-7">
              <p className="max-w-3xl text-sm leading-8 text-neutral-600 md:text-base">
                株式会社MOGCIA（以下、「当社」）は、お客様やパートナーの皆さまからお預かりする個人情報を適切に管理し、
                安心してサービスをご利用いただくために、以下の方針を定めます。
              </p>
              <p className="max-w-3xl text-sm leading-8 text-neutral-600 md:text-base">
                当社は関連法令・ガイドラインを遵守し、取得した個人情報を適正に取り扱います。
                利用目的を明確にし、必要な範囲で取得・利用・保存するとともに、
                必要な安全管理措置を講じることで信頼性の高いサービス提供を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Policy</p>
              <h2 className="mt-3 text-[1.45rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.1rem]">
                個人情報の取り扱い
              </h2>
            </div>

            <div className="border-t border-neutral-200">
              {sections.map(section => (
                <article
                  key={section.title}
                  className="border-b border-neutral-200 py-7 md:py-8"
                >
                  <h3 className="text-[1.05rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[1.2rem]">
                    {section.title}
                  </h3>
                  <p className="mt-4 whitespace-pre-line text-sm leading-8 text-neutral-600 md:text-base">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Contact</p>
              <h2 className="mt-3 text-[1.45rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.1rem]">
                お問い合わせ先
              </h2>
            </div>

            <div className="border-t border-neutral-200 pt-7 text-sm leading-8 text-neutral-600 md:text-base">
              <p>
                プライバシーポリシーに関するご質問・開示等のご依頼は、下記窓口までご連絡ください。
              </p>
              <div className="mt-6 space-y-1">
                <p>株式会社MOGCIA 個人情報保護担当</p>
                <p>〒810-0001 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル7階</p>
                <p>
                  TEL:{' '}
                  <a href="tel:092-517-9804" className="transition-colors hover:text-neutral-950">
                    092-517-9804
                  </a>
                </p>
                <p>
                  MAIL:{' '}
                  <a href="mailto:info@mogcia.jp" className="transition-colors hover:text-neutral-950">
                    info@mogcia.jp
                  </a>
                </p>
              </div>
              <p className="mt-6 text-xs text-neutral-400">制定日: 2025年4月1日</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
