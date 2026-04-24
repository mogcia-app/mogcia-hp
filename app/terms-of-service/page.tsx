import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const termsSections = [
  {
    title: '第1条（本規約の適用）',
    body: `本規約は、株式会社MOGCIA（以下、「当社」といいます。）が提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。本サービスを利用されるお客様（以下、「利用者」といいます。）は、本規約に同意したものとみなされます。`,
  },
  {
    title: '第2条（利用登録）',
    body: `本サービスの利用を希望する者は、当社所定の方法により利用登録を申請し、当社が承認した時点で利用契約が成立します。登録内容に虚偽があった場合や、過去に本規約違反等が判明した場合、当社は登録を拒否または取り消すことがあります。`,
  },
  {
    title: '第3条（アカウントの管理）',
    body: `利用者は、自己の責任においてアカウントIDおよびパスワードを管理し、第三者に利用させてはなりません。ID・パスワードの管理不備、使用上の過誤、第三者の使用等による損害について、当社は一切の責任を負いません。`,
  },
  {
    title: '第4条（禁止事項）',
    body: `利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
1. 法令または公序良俗に違反する行為
2. 犯罪行為に関連する行為
3. 当社、他の利用者、または第三者の知的財産権・肖像権・プライバシーを侵害する行為
4. 本サービスの運営を妨害するおそれのある行為
5. 反社会的勢力等への利益供与及びその他これに準ずる行為`,
  },
  {
    title: '第5条（本サービスの提供の停止等）',
    body: `当社は、以下のいずれかに該当する場合、利用者に事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができます。
1. 本サービスに係るシステムの保守点検または更新を行う場合
2. 地震、落雷、火災、停電、天災等の不可抗力によりサービス提供が困難となった場合
3. コンピュータまたは通信回線等が事故により停止した場合
4. その他、当社がサービスの提供が困難と判断した場合
なお、当社は、本サービスの停止または中断により利用者または第三者が被った不利益や損害について一切の責任を負いません。`,
  },
  {
    title: '第6条（知的財産権）',
    body: `本サービスに関連するすべてのコンテンツ（文章、画像、動画、プログラム等）の知的財産権は、利用者に帰属するものを除き、当社または適正な権利を有する第三者に帰属します。利用者は、当社の事前の承諾なく複製、転用、販売等を行ってはなりません。`,
  },
  {
    title: '第7条（掲載画像等について）',
    body: `本サイトまたは本サービスに掲載されている画像、イラスト、画面イメージ、図表その他のビジュアル表現にはイメージを含むものがあり、実際の仕様、提供内容、画面構成、提供時期等と一部異なる場合があります。`,
  },
  {
    title: '第8条（利用制限および登録抹消）',
    body: `当社は、利用者が本規約のいずれかに違反したと当社が判断した場合、事前の通知なく、利用資格の停止または登録抹消等の措置を講じることができます。当社は、これにより利用者に生じた損害について一切責任を負いません。`,
  },
  {
    title: '第9条（免責事項）',
    body: `当社は、本サービスに事実上または法律上の瑕疵がないことを保証するものではありません。当社は、利用者による本サービスの利用に起因して発生した損害について、当社の故意または重大な過失がある場合を除き、一切の責任を負いません。`,
  },
  {
    title: '第10条（個人情報の取り扱い）',
    body: `当社は、本サービスの利用によって取得する個人情報について、当社が別途定めるプライバシーポリシーに基づき適切に取り扱います。`,
  },
  {
    title: '第11条（本サービス内容の変更等）',
    body: `当社は、利用者に通知することなく、本サービスの内容の変更、追加、廃止を行うことができるものとします。変更後に利用者が本サービスを利用した場合には、当該利用者は変更後の内容に同意したものとみなします。`,
  },
  {
    title: '第12条（規約の変更）',
    body: `当社は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができます。変更後の本規約は、本サービス上に掲載した時点から効力を生じるものとします。重要な変更がある場合は、当社ウェブサイト等で告知します。`,
  },
  {
    title: '第13条（準拠法・管轄裁判所）',
    body: `本規約の解釈には日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する地方裁判所または簡易裁判所を第一審の専属的合意管轄裁判所とします。`,
  },
]

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#f7f7f5] text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Terms Of Service</p>
              <h1 className="text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                利用規約
              </h1>
            </div>

            <div className="space-y-8 border-t border-neutral-200 pt-7">
              <p className="max-w-3xl text-sm leading-8 text-neutral-600 md:text-base">
                株式会社MOGCIAが提供する各種サービスをご利用いただく際の条件を定めています。
                ご利用に先立ち、本規約をご確認のうえ、内容に同意したうえでお申し込みください。
              </p>
              <p className="max-w-3xl text-sm leading-8 text-neutral-600 md:text-base">
                本規約は、当社の提供するAIコンサルティング・DX支援・プロダクト開発等の各サービスに共通して適用されます。
                利用者と当社の権利義務関係が明確になるよう、基本事項から免責事項までを記載しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Terms</p>
              <h2 className="mt-3 text-[1.45rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.1rem]">
                ご利用にあたって
              </h2>
            </div>

            <div className="border-t border-neutral-200">
              {termsSections.map(section => (
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
                お問い合わせ窓口
              </h2>
            </div>

            <div className="border-t border-neutral-200 pt-7 text-sm leading-8 text-neutral-600 md:text-base">
              <p>
                本規約に関するご質問や個別契約に関するご相談は、下記窓口までお気軽にご連絡ください。
              </p>
              <div className="mt-6 space-y-1">
                <p>株式会社MOGCIA 契約窓口</p>
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
