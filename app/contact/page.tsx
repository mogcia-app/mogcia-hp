import Image from 'next/image'
import Script from 'next/script'

import AiGeneratedNotice from '@/components/AiGeneratedNotice'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const contactReasons = [
  { label: '課題整理・戦略立案' },
  { label: 'プロダクト開発・PoC支援' },
  { label: '共創・パートナー連携' },
  { label: '取材・その他のお問い合わせ' },
]

export default function ContactPage() {
  return (
    <main className="bg-[#f7f7f5] text-neutral-950">
      <section className="relative hidden h-[70vh] min-h-[480px] overflow-hidden md:block">
        <Image
          src="/d.png"
          alt="Contact hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <AiGeneratedNotice />
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Contact</p>
              <h1 className="text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                お問い合わせ
              </h1>
            </div>

            <div className="space-y-8 border-t border-neutral-200 pt-7">
              <p className="max-w-3xl text-sm leading-8 text-neutral-600 md:text-base">
                プロジェクトのご相談、パートナー連携、取材の依頼など、お気軽にご連絡ください。
                目的に合わせ、最適なメンバーが対応いたします。
              </p>

              <div className="flex flex-wrap gap-3">
                {contactReasons.map(item => (
                  <span
                    key={item.label}
                    className="inline-flex rounded-full border border-neutral-200 px-4 py-2 text-[11px] tracking-[0.18em] text-neutral-500 md:text-xs"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-12 xl:grid-cols-[0.62fr_1.38fr] xl:gap-20">
            <div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Contact Form</p>
                <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                  フォームからのお問い合わせ
                </h2>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-8">
              <form
                className="formrun space-y-6 text-sm text-neutral-700 md:text-base"
                action="https://form.run/api/v1/r/7tbbkege85us5qykn1vsn7i3"
                method="post"
                data-formrun-success-url="/thanks"
                autoComplete="off"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-[11px] uppercase tracking-[0.3em] text-neutral-400">お名前</label>
                    <input
                      name="お名前"
                      type="text"
                      className="w-full border border-neutral-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                      autoComplete="off"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] uppercase tracking-[0.3em] text-neutral-400">会社名</label>
                    <input
                      name="会社名"
                      type="text"
                      className="w-full border border-neutral-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                    メールアドレス [必須]
                  </label>
                  <input
                    name="メールアドレス"
                    type="text"
                    data-formrun-type="email"
                    data-formrun-required
                    className="w-full border border-neutral-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                    autoComplete="off"
                  />
                  <div className="text-xs text-red-500" data-formrun-show-if-error="メールアドレス">
                    メールアドレスを正しく入力してください
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                    お問い合わせ項目 [必須]
                  </label>
                  <select
                    name="お問い合わせ項目"
                    data-formrun-required
                    className="w-full border border-neutral-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
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
                  <label className="block text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                    お問い合わせ [必須]
                  </label>
                  <textarea
                    name="お問い合わせ"
                    data-formrun-required
                    rows={7}
                    className="w-full border border-neutral-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                  />
                  <div className="text-xs text-red-500" data-formrun-show-if-error="お問い合わせ">
                    お問い合わせ内容を入力してください
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-neutral-500">
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
                  className="inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-white transition-colors hover:bg-neutral-800"
                >
                  送信
                  <span className="h-px w-8 bg-current" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <Script src="https://sdk.form.run/js/v2/formrun.js" strategy="afterInteractive" />
    </main>
  )
}
