'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SectionLabel, tone, type Tone } from '@/components/PageFrame'

type Option = { label: string; key: string }
const questions: { q: string; color: Tone; options: Option[] }[] = [
  { q: 'いちばん解決したいことは？', color: 'sky', options: [
    { label: '人を採用したい', key: 'recruit' }, { label: 'お客さまを増やしたい', key: 'attract' }, { label: 'お客さまとのつながりを深めたい', key: 'connect' }, { label: '毎日の業務を楽にしたい', key: 'ops' }] },
  { q: 'いまの取り組み状況は？', color: 'pink', options: [
    { label: 'まだ何もしていない', key: 'none' }, { label: '自分たちでやっている', key: 'self' }, { label: '外注しているが手応えがない', key: 'outsourced' }] },
  { q: '社内に担当できる人は？', color: 'butter', options: [
    { label: 'いない', key: 'nobody' }, { label: 'ほかの仕事と兼任', key: 'part' }, { label: '専任がいる', key: 'full' }] },
  { q: 'いつごろまでに始めたい？', color: 'lilac', options: [
    { label: 'すぐにでも', key: 'now' }, { label: '3か月以内', key: 'soon' }, { label: 'まずは情報収集', key: 'later' }] },
]

const results: Record<string, { title: string; service: string; href: string; body: string; color: Tone }> = {
  recruit: { title: '採用につながる発信づくり', service: 'SNS運用代行', href: '/services/sns', body: '求職者が見ているのは、求人票よりも「働く人の雰囲気」。SNSで会社の日常を発信して、応募したくなるきっかけをつくります', color: 'sky' },
  attract: { title: '見つけてもらう入口づくり', service: 'Web制作・広告運用', href: '/services/web', body: 'ホームページ・SNS・広告をつなげて、検索や投稿からお問い合わせまでの道すじを整えます', color: 'pink' },
  connect: { title: 'お客さまとつながり続ける仕組み', service: 'commo.', href: '/services/system', body: 'LINEや会員の仕組みで、一度来てくれたお客さまと関係を続け、リピートにつなげます', color: 'lilac' },
  ops: { title: '手作業を減らすAI・システム', service: 'AI・システム開発', href: '/services/system', body: '予約・受発注・集計など、毎日くり返している作業をAIやシステムで自動化します', color: 'mint' },
}

const advice: Record<string, string> = {
  none: 'ゼロからでも大丈夫。まずは小さく始めて、効果を見ながら広げていきましょう',
  self: '今の取り組みを活かしながら、手間のかかる部分からおまかせいただけます',
  outsourced: '今の施策を一度見える化して、どこを変えると成果につながるか一緒に整理します',
  nobody: '担当者がいなくても、つくるところから運用までまるっと対応できます',
  part: '兼任の方の負担が増えないよう、まわる仕組みづくりからお手伝いします',
  full: '担当者さまと二人三脚で、社内にノウハウが残る形で進めます',
}

export default function DiagnosisQuiz() {
  const [answers, setAnswers] = useState<string[]>([])
  const step = answers.length
  const done = step >= questions.length
  const pick = (key: string) => setAnswers([...answers, key])
  const reset = () => setAnswers([])

  if (done) {
    const r = results[answers[0]]
    return <div className="rounded-[1.5rem] p-3" style={{ backgroundColor: tone[r.color].band }}>
      <div className="rounded-[1.1rem] bg-white p-7 md:p-10">
        <SectionLabel label="Result" color={r.color} />
        <p className="mt-6 text-xs font-bold text-ink-soft">あなたの会社におすすめなのは</p>
        <h3 className="mt-2 text-2xl font-black leading-[1.5] md:text-3xl">{r.title}</h3>
        <p className="mt-4 inline-flex rounded-full px-3 py-1 text-[11px] font-bold" style={{ backgroundColor: tone[r.color].chip }}>{r.service}</p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-soft">{r.body}</p>
        <ul className="mt-6 grid gap-2 md:grid-cols-2">{[answers[1], answers[2]].map((k) => <li key={k} className="flex gap-3 rounded-xl p-4 text-xs leading-6" style={{ backgroundColor: tone[r.color].band }}><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: tone[r.color].dot }} />{advice[k]}</li>)}</ul>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact" className="button button-dark text-xs">この結果で相談する →</Link>
          <Link href={r.href} className="border-b border-ink pb-1 text-xs font-bold">{r.service}を詳しく見る</Link>
          <button onClick={reset} className="text-xs font-bold text-ink-soft underline-offset-4 hover:underline">もう一度診断する</button>
        </div>
      </div>
    </div>
  }

  const q = questions[step]
  return <div className="rounded-[1.5rem] p-3" style={{ backgroundColor: tone[q.color].band }}>
    <div className="rounded-[1.1rem] bg-white p-7 md:p-10">
      <div className="flex items-center justify-between">
        <SectionLabel label={`Question ${step + 1} / ${questions.length}`} color={q.color} />
        {step > 0 && <button onClick={() => setAnswers(answers.slice(0, -1))} className="text-[11px] font-bold text-ink-soft">← ひとつ戻る</button>}
      </div>
      <div className="mt-5 flex gap-1.5" aria-hidden>{questions.map((qq, i) => <span key={qq.q} className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: i <= step ? tone[qq.color].dot : '#e9ecef' }} />)}</div>
      <h3 className="mt-8 text-2xl font-black md:text-3xl">{q.q}</h3>
      <div className="mt-8 grid gap-3 md:grid-cols-2">{q.options.map((o) => <button key={o.key} onClick={() => pick(o.key)} className="group flex min-h-16 items-center justify-between rounded-xl border border-ink/10 px-5 text-left text-sm font-bold transition-colors hover:border-transparent" onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = tone[q.color].chip)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}>{o.label}<span className="text-ink-soft transition-transform group-hover:translate-x-1" aria-hidden>→</span></button>)}</div>
    </div>
  </div>
}
