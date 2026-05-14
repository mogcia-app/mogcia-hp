import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
      <div className="mx-auto w-full max-w-[1320px] border-y border-neutral-200 py-8 md:py-10">
        <div className="grid gap-8 md:gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Contact</p>
            <h2 className="mt-4 text-[1.9rem] font-light leading-[1.15] tracking-[-0.03em] text-neutral-950 md:text-[2.8rem]">
              ご相談・
              <br />
              お問い合わせ
            </h2>
          </div>

          <div className="border-t border-neutral-200 pt-7">
            <p className="max-w-2xl text-sm leading-8 text-neutral-600 md:text-base">
              事業課題や制作、運用のご相談はこちらから。内容を確認後、目的に合わせて最適なメンバーが順次ご連絡します。
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-neutral-950 px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-neutral-950 transition-colors duration-300 hover:bg-neutral-950 hover:text-white"
            >
              Contact Us
              <span className="h-px w-8 bg-current transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
