import Link from 'next/link'
import Footer from '@/components/Footer'
import DiagnosisQuiz from '@/components/DiagnosisQuiz'
import { PageHeader, SectionHead, SoftContact, tone, type Tone } from '@/components/PageFrame'

export const metadata = { title: 'AI診断 | MOGCIA', description: '4つの質問に答えるだけで、あなたの会社に合った始め方がわかります' }

const points: [string, string, string, Tone][] = [
  ['01', '約1分・4問だけ', '選ぶだけで答えられます。名前や連絡先の入力は不要です', 'sky'],
  ['02', 'その場で結果がわかる', 'おすすめの取り組みと、進め方のヒントをお伝えします', 'pink'],
  ['03', 'そのまま相談もできる', '結果をもとに、無料でご相談いただけます', 'mint'],
]

export default function Diagnosis() {
  return <main className="bg-white text-ink">
    <PageHeader color="butter" diagonalAccent crumbs={[['AI診断']]} title="Check" lead={<>なにから始める？<br />1分でわかる、AI診断</>} body="「AIやSNSが気になるけど、うちは何をすればいい？」そんな方のための簡単な診断です。4つの質問に答えるだけで、あなたの会社に合った始め方をご提案します。" />

    <section id="quiz" className="page-shell scroll-mt-24 pb-24 md:pb-32">
      <SectionHead number="01" label="Start" color="sky" title="さっそく診断してみる" />
      <div className="mt-10"><DiagnosisQuiz /></div>
    </section>

    <section id="about" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.butter.band }}><div className="page-shell">
      <SectionHead number="02" label="About" color="butter" title="気軽に使える診断です" action={<Link href="/services" className="border-b border-ink pb-1 text-xs font-bold">サービス一覧を見る →</Link>} />
      <div className="mt-12 grid gap-4 md:grid-cols-3">{points.map(([no, title, body, color]) => <article key={no} className="rounded-[1.5rem] bg-white p-7">
        <p className="grid h-16 w-16 place-items-center rounded-full font-display text-xl font-black" style={{ backgroundColor: tone[color].chip }}>{no}</p>
        <h3 className="mt-5 text-lg font-black">{title}</h3>
        <p className="mt-2.5 text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
    </div></section>

    <SoftContact title={<>診断しなくても、<br />もちろん相談できます</>} body="「まだぼんやりしている」段階でも大丈夫。お話ししながら一緒に整理します" />
    <Footer />
  </main>
}
