import Image from 'next/image'
import Link from 'next/link'

export default function ContactSection() {
  return (
    <section id="contact" className="px-3 py-20 md:px-4 md:py-24 lg:px-6 xl:px-8">
      <div className="mx-auto w-full overflow-hidden">
        <Link
          href="/contact"
          className="group relative flex min-h-[260px] w-full flex-col justify-end overflow-hidden border border-neutral-200 bg-white px-6 py-8 text-neutral-950 md:hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,0,0,0.04),_transparent_38%),linear-gradient(135deg,_rgba(0,0,0,0.025),_transparent_52%)]" />
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.32em] text-neutral-500">Contact</p>
            <h2 className="mt-4 text-[1.9rem] font-light leading-[1.2] tracking-[-0.03em]">
              ご相談・
              <br />
              お問い合わせ
            </h2>
            <p className="mt-4 max-w-[22rem] text-sm leading-7 text-neutral-600">
              事業課題や制作、運用のご相談はこちらから。内容を確認後、順次ご連絡します。
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-neutral-950 transition-transform duration-300 group-hover:translate-x-1">
              Contact Us
              <span className="h-px w-8 bg-current" />
            </div>
          </div>
        </Link>
        <Link href="/contact" className="group relative hidden aspect-[16/3] w-full overflow-hidden md:block">
          <Image
            src="/cta.svg"
            alt="Contact"
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
          />
        </Link>
      </div>
    </section>
  )
}
