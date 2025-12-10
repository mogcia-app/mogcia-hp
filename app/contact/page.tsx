import Link from 'next/link'
import Script from 'next/script'

import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const contactReasons = [
  {
    label: 'Consulting',
    title: '課題整理・戦略立案のご相談',
    body: 'AI/DXを活用したいが、課題や要件が明確でない段階から支援します。現状把握とロードマップ策定をご一緒に行います。',
  },
  {
    label: 'Product',
    title: 'プロダクト開発・PoC支援',
    body: 'PoC検証、プロダクト開発、運用改善まで、目的に合わせた体制で伴走。短期での成果創出と長期的なグロースを両立します。',
  },
  {
    label: 'Partnership',
    title: '共創・パートナー連携',
    body: '販売・技術・地域パートナーとの共創アイデアも歓迎です。協業スキームの設計やマーケティング連携についてもお気軽にご相談ください。',
  },
]

const preparationSteps = [
  {
    step: '01',
    title: 'お問い合わせ',
    body: 'フォーム・メール・電話からご連絡ください。通常、営業日であれば24時間以内に担当よりご返信します。',
  },
  {
    step: '02',
    title: '初回ヒアリング',
    body: 'オンラインを中心に30〜60分で課題・ゴール・体制をヒアリング。必要に応じて社内の専門メンバーが同席します。',
  },
  {
    step: '03',
    title: 'ご提案・お見積り',
    body: 'ヒアリング内容を基に、進め方のオプションや初期プランをご提案。NDAが必要な場合も柔軟に対応いたします。',
  },
]

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/istockphoto-2196775101-640_adpp_is.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-3xl px-6 text-center text-white space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Contact</p>
            <h1 className="text-3xl md:text-5xl font-light tracking-wide">お問い合わせ</h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              プロジェクトのご相談、パートナー連携、取材の依頼など、お気軽にご連絡ください。<br />
              目的に合わせ、最適なメンバーが迅速に対応いたします。
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">How We Help</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900">MOGCIAへの主なご相談内容</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                ビジネス課題の整理からプロダクト開発、協業検討まで幅広くお受けしています。初回ヒアリングは無料、オンラインで全国からご相談いただけます。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactReasons.map(item => (
              <div
                key={item.label}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">{item.label}</p>
                <h3 className="text-lg font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Contact Form</p>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide">フォームからのお問い合わせ</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              下記フォームに必要事項をご入力のうえ送信してください。担当者よりメールにてご連絡いたします。
            </p>
          </div>

          <div className="border border-gray-200 bg-white px-8 md:px-12 py-12 shadow-[0_18px_55px_rgba(24,32,56,0.12)]">
            <form
              className="formrun space-y-6 text-sm md:text-base text-gray-700"
              action="https://form.run/api/v1/r/7tbbkege85us5qykn1vsn7i3"
              method="post"
              data-formrun-success-url="/thanks"
              autoComplete="off"
            >
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.3em] text-gray-400">お名前</label>
                <input
                  name="お名前"
                  type="text"
                  className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/40"
                  autoComplete="off"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.3em] text-gray-400">会社名</label>
                <input
                  name="会社名"
                  type="text"
                  className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/40"
                  autoComplete="off"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.3em] text-gray-400">メールアドレス [必須]</label>
                <input
                  name="メールアドレス"
                  type="text"
                  data-formrun-type="email"
                  data-formrun-required
                  className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/40"
                  autoComplete="off"
                />
                <div className="text-xs text-red-500" data-formrun-show-if-error="メールアドレス">
                  メールアドレスを正しく入力してください
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.3em] text-gray-400">お問い合わせ項目 [必須]</label>
                <select
                  name="お問い合わせ項目"
                  data-formrun-required
                  className="w-full border border-gray-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/40"
                >
                  <option value="">選択してください</option>
                  <option value="AI・DX相談">AI・DX相談</option>
                  <option value="プロダクト開発">プロダクト開発</option>
                  <option value="協業・パートナー">協業・パートナー</option>
                  <option value="採用・取材">採用・取材</option>
                  <option value="その他">その他</option>
                </select>
                <div className="text-xs text-red-500" data-formrun-show-if-error="お問い合わせ項目">
                  お問い合わせ項目を選択してください
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-[0.3em] text-gray-400">お問い合わせ [必須]</label>
                <textarea
                  name="お問い合わせ"
                  data-formrun-required
                  rows={6}
                  className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/40"
                ></textarea>
                <div className="text-xs text-red-500" data-formrun-show-if-error="お問い合わせ">
                  お問い合わせ内容を入力してください
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
                  <input type="checkbox" name="個人情報利用同意" data-formrun-required className="h-4 w-4" />
                  個人情報利用同意 [必須]
                </label>
                <div className="text-xs text-red-500" data-formrun-show-if-error="個人情報利用同意">
                  同意してください
                </div>
              </div>

              <div
                className="_formrun_gotcha"
                style={{ position: 'absolute', height: 1, width: 1, overflow: 'hidden' }}
              >
                <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
                <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
              </div>

              <button
                type="submit"
                data-formrun-error-text="未入力の項目があります"
                data-formrun-submitting-text="送信中..."
                className="inline-flex items-center gap-3 border border-gray-900 px-8 py-3 text-xs uppercase tracking-[0.3em] text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
              >
                送信
                <span className="h-px w-6 bg-gray-900 group-hover:bg-white"></span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Process</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900">お問い合わせ後の流れ</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                迅速かつ柔軟な対応を心がけています。緊急度の高い案件はお電話でのご連絡も歓迎です。状況に応じて最適なメンバーをアサインします。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preparationSteps.map(item => (
              <div
                key={item.step}
                className="group relative border border-gray-200 bg-white px-10 py-12 flex flex-col gap-5 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gray-400">
                  <span>{item.step}</span>
                  <span className="flex-1 h-px bg-gray-200"></span>
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      <ContactSection />
      <Footer />
      <Script src="https://sdk.form.run/js/v2/formrun.js" strategy="afterInteractive" />
    </main>
  )
}


