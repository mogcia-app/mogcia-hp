'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SectionLabel, tone, type Tone } from '@/components/PageFrame'
import { stories } from '@/lib/site-data'

type Option = { label: string; key: string }
type Question = { id: string; q: string; note?: string; color: Tone; multi?: boolean; options: Option[] | ((a: Answers) => Option[]) }
type Answers = Record<string, string[]>

const goalPains: Record<string, Option[]> = {
  recruit: [{ label: '応募が来ない', key: 'r1' }, { label: '求める人が来ない', key: 'r2' }, { label: 'すぐ辞めてしまう', key: 'r3' }, { label: '採用活動に手が回らない', key: 'r4' }],
  attract: [{ label: '新規のお客さまが来ない', key: 'a1' }, { label: '問い合わせが少ない', key: 'a2' }, { label: 'ホームページが古い・ない', key: 'a3' }, { label: 'SNSが続かない', key: 'a4' }],
  connect: [{ label: 'リピートが少ない', key: 'c1' }, { label: '連絡手段がバラバラ', key: 'c2' }, { label: 'お客さまの声が集まらない', key: 'c3' }, { label: '予約・問い合わせ対応が大変', key: 'c4' }],
  ops: [{ label: '手作業・転記が多い', key: 'o1' }, { label: '情報があちこちに散らばっている', key: 'o2' }, { label: '特定の人しかわからない業務がある', key: 'o3' }, { label: '予約・受発注の管理が大変', key: 'o4' }],
  ai: [{ label: '何に使えるかわからない', key: 'i1' }, { label: '使う人が限られている', key: 'i2' }, { label: '社内のルールがない', key: 'i3' }, { label: '自社用のツールを作りたい', key: 'i4' }],
}

const questions: Question[] = [
  { id: 'industry', q: '業種は？', color: 'sky', options: [
    { label: '飲食・カフェ', key: 'food' }, { label: '小売・EC', key: 'retail' }, { label: '宿泊・観光', key: 'hotel' }, { label: '建設・不動産', key: 'build' }, { label: '医療・福祉・美容', key: 'care' }, { label: '製造・卸', key: 'maker' }, { label: '士業・サービス', key: 'service' }, { label: '政治・行政', key: 'politics' }, { label: 'その他', key: 'other' }] },
  { id: 'size', q: '従業員数は？', color: 'pink', options: [
    { label: '1〜5名', key: 's1' }, { label: '6〜20名', key: 's2' }, { label: '21〜50名', key: 's3' }, { label: '51名以上', key: 's4' }] },
  { id: 'goal', q: 'いちばん解決したいことは？', color: 'butter', options: [
    { label: '人を採用したい', key: 'recruit' }, { label: 'お客さまを増やしたい', key: 'attract' }, { label: 'お客さまとのつながりを深めたい', key: 'connect' }, { label: '毎日の業務を楽にしたい', key: 'ops' }, { label: '社内でAIを使えるようにしたい', key: 'ai' }] },
  { id: 'pain', q: '具体的には？', color: 'lilac', options: (a) => goalPains[a.goal?.[0] ?? 'attract'] },
  { id: 'status', q: 'いまの取り組み状況は？', color: 'mint', options: [
    { label: 'まだ何もしていない', key: 'none' }, { label: '自分たちでやっている', key: 'self' }, { label: '外注しているが手応えがない', key: 'outsourced' }] },
  { id: 'tools', q: 'いま使っているものは？', note: 'あてはまるものをすべて選んでください', color: 'peach', multi: true, options: [
    { label: 'ホームページ', key: 'hp' }, { label: 'Instagram', key: 'insta' }, { label: 'LINE公式', key: 'line' }, { label: 'Googleマップ', key: 'gmap' }, { label: '予約・顧客管理', key: 'booking' }, { label: 'ChatGPTなどのAI', key: 'ai' }, { label: '特になし', key: 'nothing' }] },
  { id: 'staff', q: '社内に担当できる人は？', color: 'sky', options: [
    { label: 'いない', key: 'nobody' }, { label: 'ほかの仕事と兼任', key: 'part' }, { label: '専任がいる', key: 'full' }] },
  { id: 'budget', q: '月の予算感は？', color: 'pink', options: [
    { label: '〜3万円', key: 'b1' }, { label: '3〜10万円', key: 'b2' }, { label: '10〜30万円', key: 'b3' }, { label: 'まだ決めていない', key: 'b4' }] },
  { id: 'timing', q: 'いつごろまでに始めたい？', color: 'butter', options: [
    { label: 'すぐにでも', key: 'now' }, { label: '3か月以内', key: 'soon' }, { label: 'まずは情報収集', key: 'later' }] },
]

const optionsOf = (q: Question, a: Answers) => typeof q.options === 'function' ? q.options(a) : q.options
const labelOf = (id: string, a: Answers) => {
  const q = questions.find(x => x.id === id)!
  return (a[id] ?? []).map(k => optionsOf(q, a).find(o => o.key === k)?.label).filter(Boolean).join('・')
}

const types: Record<string, { title: string; body: string; color: Tone }> = {
  recruit: { title: '「会社の魅力を、届けきれていない」タイプ', body: '働く人の雰囲気や仕事のやりがいは、求人票だけでは伝わりません。SNSや採用ページで会社の日常を発信し、「ここで働きたい」と思ってもらうきっかけを増やすのがおすすめです。', color: 'sky' },
  attract: { title: '「いいものがあるのに、見つけてもらえていない」タイプ', body: '商品やサービスの良さが、まだ届くべき人に届いていない状態です。ホームページ・SNS・Googleマップをつなげて、検索や投稿からお問い合わせまでの道すじを整えましょう。', color: 'pink' },
  connect: { title: '「一度きりで終わらせない仕組みが必要」タイプ', body: '新しいお客さまを探すより、一度来てくれた方との関係を続けるほうが近道なこともあります。LINEなどで連絡の窓口をひとつにまとめ、リピートにつながる仕組みをつくりましょう。', color: 'lilac' },
  ops: { title: '「手作業を減らして、攻めに回す」タイプ', body: '毎日くり返している作業に、時間をとられている状態です。まずは手作業をAIと仕組みで減らし、空いた時間を本来の仕事やお客さま対応に回すのがおすすめです。', color: 'mint' },
  ai: { title: '「AIを、使える道具に変える」タイプ', body: 'AIへの関心はあるものの、まだ社内の「当たり前」にはなっていない状態です。使い方を学び、ルールを決め、業務に組みこむことで、AIを毎日の道具にしていきましょう。', color: 'butter' },
}

const services: Record<string, { name: string; text: string; href: string; color: Tone }> = {
  ai: { name: 'AI導入支援', text: '研修から社内への定着、仕組みづくりまで', href: '/services/ai', color: 'mint' },
  system: { name: 'AI導入・システム開発', text: '業務に合わせたツールと、AIを組みこんだ仕組み', href: '/services/system', color: 'sky' },
  commo: { name: 'commo.', text: 'LINEで、お知らせ・予約・問い合わせをひとつに', href: '/services/system', color: 'lilac' },
  sns: { name: 'SNS運用', text: '企画から投稿・分析まで、発信をおまかせ', href: '/services/sns', color: 'pink' },
  web: { name: 'Web制作', text: '見つけてもらい、問い合わせにつながるサイトに', href: '/services/web', color: 'butter' },
}

const baseRec: Record<string, Record<string, number>> = {
  recruit: { sns: 40, web: 28, ai: 10, system: 5, commo: 5 },
  attract: { web: 36, sns: 34, commo: 14, ai: 8, system: 4 },
  connect: { commo: 44, sns: 20, system: 14, ai: 8, web: 6 },
  ops: { system: 44, ai: 34, commo: 12, web: 2, sns: 2 },
  ai: { ai: 50, system: 30, commo: 6, sns: 4, web: 2 },
}
const painRec: Record<string, Record<string, number>> = {
  r1: { sns: 12 }, r2: { web: 12 }, r3: { sns: 6, ai: 4 }, r4: { ai: 10, system: 6 },
  a1: { sns: 10 }, a2: { web: 14 }, a3: { web: 20 }, a4: { sns: 18 },
  c1: { commo: 10 }, c2: { commo: 14 }, c3: { commo: 10, sns: 4 }, c4: { commo: 12, system: 10 },
  o1: { system: 12, ai: 6 }, o2: { system: 14 }, o3: { ai: 12 }, o4: { system: 10, commo: 8 },
  i1: { ai: 12 }, i2: { ai: 10 }, i3: { ai: 10 }, i4: { system: 18 },
}

const roadmaps: Record<string, [string, string, string][]> = {
  recruit: [['1か月目', '伝えることを決める', '働く人・仕事の魅力を整理し、発信の軸をつくる'], ['2〜3か月目', '発信を始める', 'SNSで会社の日常を発信し、採用ページを整える'], ['半年後', '応募につなげる', '反応を見ながら、応募までの導線を改善する']],
  attract: [['1か月目', '入口を整える', 'ホームページ・Googleマップの情報を最新に'], ['2〜3か月目', '発信を始める', 'SNSで定期的に発信し、見つけてもらう機会を増やす'], ['半年後', '問い合わせにつなげる', '数字を見ながら、問い合わせまでの道すじを改善']],
  connect: [['1か月目', '窓口をまとめる', 'LINEで、お知らせと問い合わせの窓口をひとつに'], ['2〜3か月目', '関係を続ける', '定期的なお知らせやアンケートで、つながりを保つ'], ['半年後', 'リピートを増やす', '反応のよい配信を続け、来店・利用につなげる']],
  ops: [['1か月目', 'まずは知る', 'AI研修で、何に使えるかを社内で共有する'], ['2〜3か月目', '小さく試す', 'いちばん時間のかかる作業から、AIと仕組みで自動化'], ['半年後', '広げる', '空いた時間を、集客やお客さま対応に回す']],
  ai: [['1か月目', '使い方を覚える', 'AI研修で、基本と業務での使い方を身につける'], ['2〜3か月目', 'ルールと定着', '社内ルールを決め、伴走で毎日の業務に根づかせる'], ['半年後', '仕組みにする', '自社用のツールやAIを組みこんだ仕組みをつくる']],
}

const advice: Record<string, [string, string]> = {
  none: ['いまの取り組みについて', 'ゼロからでも大丈夫。まずは小さく始めて、効果を見ながら広げていきましょう。'],
  self: ['いまの取り組みについて', '今の取り組みを活かしながら、手間のかかる部分からおまかせいただけます。'],
  outsourced: ['いまの取り組みについて', '今の施策を一度見える化して、どこを変えると成果につながるか一緒に整理します。'],
  nobody: ['担当者について', '担当者がいなくても、つくるところから運用までまるっと対応できます。'],
  part: ['担当者について', '兼任の方の負担が増えないよう、まわる仕組みづくりからお手伝いします。'],
  full: ['担当者について', '担当者さまと二人三脚で、社内にノウハウが残る形で進めます。'],
}

const budgetAdvice: Record<string, string> = {
  b1: 'まずは単発の研修や、ひとつのサービスから小さく始めるのがおすすめです。',
  b2: '1〜2つのサービスを組み合わせて、3か月ほど試してみるのがおすすめです。',
  b3: '複数のサービスを組み合わせて、仕組みと発信を同時に整えられます。',
  b4: 'ご相談のうえ、効果の出やすいところから無理のない形をご提案します。',
}

const industryMap: Record<string, string[]> = {
  food: ['飲食'], retail: ['小売・ファッション', 'アパレル', '卸売'], hotel: ['ホテル・旅館', '観光・イベント', 'ゴルフ場'],
  build: ['建設', '不動産', '住宅', '住宅・不動産', '住宅設備', '設備'], care: ['美容', 'フィットネス', 'スポーツ・健康'],
  maker: ['卸売', '食品配送'], service: ['サービス業', '法人向けサービス', '法人営業', '人材派遣', '教育', '地域サービス', 'IT'], politics: ['政治関係'], other: [],
}
const goalPurpose: Record<string, string> = { recruit: '採用', attract: '集客・認知', connect: '顧客対応・リピート', ops: '業務改善', ai: '業務改善' }

const axes = ['発信力', '集客の導線', 'お客さまとの関係', '業務の効率', 'AI活用'] as const

function computeScores(a: Answers) {
  const s = [20, 20, 20, 20, 15]
  const tools = a.tools ?? []
  if (tools.includes('insta')) s[0] += 30
  if (tools.includes('hp')) { s[1] += 25; s[0] += 5 }
  if (tools.includes('gmap')) s[1] += 15
  if (tools.includes('line')) { s[2] += 30; s[0] += 5 }
  if (tools.includes('booking')) { s[3] += 20; s[2] += 10 }
  if (tools.includes('ai')) { s[4] += 35; s[3] += 10 }
  const status = a.status?.[0]
  if (status === 'self') { s[0] += 10; s[1] += 5 }
  if (status === 'outsourced') { s[0] += 10; s[1] += 10 }
  const staff = a.staff?.[0]
  if (staff === 'part') s.forEach((_, i) => { s[i] += 5 })
  if (staff === 'full') s.forEach((_, i) => { s[i] += 10 })
  const weak: Record<string, number> = { recruit: 0, attract: 1, connect: 2, ops: 3, ai: 4 }
  const g = a.goal?.[0]
  if (g && g in weak) s[weak[g]] -= 10
  return s.map(v => Math.max(10, Math.min(95, v)))
}

function computeRecs(a: Answers) {
  const g = a.goal?.[0] ?? 'attract'
  const score: Record<string, number> = { ...baseRec[g] }
  Object.entries(painRec[a.pain?.[0] ?? ''] ?? {}).forEach(([k, v]) => { score[k] = (score[k] ?? 0) + v })
  const tools = a.tools ?? []
  if (!tools.includes('line')) score.commo += 4
  if (!tools.includes('hp')) score.web += 6
  if (!tools.includes('ai')) score.ai += 4
  if (a.staff?.[0] === 'nobody') score.sns += 4
  return Object.entries(score).sort((x, y) => y[1] - x[1]).slice(0, 3).map(([key, v], i) => ({ key, pct: Math.min(96, 52 + v - i * 3) }))
}

function findCase(a: Answers) {
  const inds = industryMap[a.industry?.[0] ?? 'other'] ?? []
  const purpose = goalPurpose[a.goal?.[0] ?? 'attract']
  return stories.find(s => inds.includes(s.industry) && s.purpose === purpose) ?? stories.find(s => inds.includes(s.industry)) ?? stories.find(s => s.purpose === purpose)
}

function Radar({ values, color }: { values: number[]; color: Tone }) {
  const cx = 210, cy = 215, r = 140
  const pt = (i: number, rr: number) => { const t = -Math.PI / 2 + (i * 2 * Math.PI) / 5; return [cx + rr * Math.cos(t), cy + rr * Math.sin(t)] }
  const poly = (f: (i: number) => number) => Array.from({ length: 5 }, (_, i) => pt(i, f(i)).map(n => n.toFixed(1)).join(',')).join(' ')
  return <svg viewBox="0 0 420 420" className="h-auto w-full max-w-[380px]" role="img" aria-label={`いまの状態：${axes.map((x, i) => `${x}${values[i]}点`).join('、')}`}>
    {[0.25, 0.5, 0.75, 1].map(f => <polygon key={f} points={poly(() => r * f)} fill="none" stroke="rgba(30,41,59,.12)" />)}
    {axes.map((_, i) => { const [x, y] = pt(i, r); return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(30,41,59,.12)" /> })}
    <polygon points={poly(i => (r * values[i]) / 100)} fill={tone[color].chip} fillOpacity=".85" stroke={tone[color].dot} strokeWidth="2" />
    {axes.map((a, i) => { const [x, y] = pt(i, r + 30); return <text key={a} x={x} y={y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#1E293B">{a} {values[i]}</text> })}
  </svg>
}

const box = (color: Tone, size = 5) => ({ boxShadow: `${size}px ${size}px 0 ${tone[color].chip}` })

export default function DiagnosisQuiz() {
  const [answers, setAnswers] = useState<Answers>({})
  const [step, setStep] = useState(0)
  const [multi, setMulti] = useState<string[]>([])
  const done = step >= questions.length

  const answer = (id: string, keys: string[]) => {
    const next = { ...answers, [id]: keys }
    if (id === 'goal' && answers.goal?.[0] !== keys[0]) delete next.pain
    setAnswers(next)
    setStep(step + 1)
    const nq = questions[step + 1]
    setMulti(nq?.multi ? next[nq.id] ?? [] : [])
  }
  const back = () => { const p = step - 1; setStep(p); const pq = questions[p]; setMulti(pq?.multi ? answers[pq.id] ?? [] : []) }
  const reset = () => { setAnswers({}); setStep(0); setMulti([]) }
  const toggle = (key: string) => {
    if (key === 'nothing') return setMulti(multi.includes('nothing') ? [] : ['nothing'])
    const base = multi.filter(k => k !== 'nothing')
    setMulti(base.includes(key) ? base.filter(k => k !== key) : [...base, key])
  }

  if (done) {
    const g = answers.goal?.[0] ?? 'attract'
    const t = types[g]
    const scores = computeScores(answers)
    const recs = computeRecs(answers)
    const story = findCase(answers)
    const adv = [advice[answers.status?.[0] ?? 'none'], advice[answers.staff?.[0] ?? 'nobody']]
    const summary = ['【AI診断の結果】', `業種：${labelOf('industry', answers)}`, `従業員数：${labelOf('size', answers)}`, `解決したいこと：${labelOf('goal', answers)}（${labelOf('pain', answers)}）`, `いまの状況：${labelOf('status', answers)}`, `使っているもの：${labelOf('tools', answers)}`, `担当者：${labelOf('staff', answers)}`, `予算：${labelOf('budget', answers)}`, `時期：${labelOf('timing', answers)}`, `診断タイプ：${t.title}`, `おすすめ：${recs.map(r => services[r.key].name).join('／')}`].join('\n')
    return <div className="grid gap-10">
      <div className="grid items-center gap-8 border border-ink bg-white p-7 md:p-10 lg:grid-cols-[1.1fr_.9fr]" style={box(t.color, 8)}>
        <div className="flex flex-col gap-4">
          <SectionLabel label="Result" color={t.color} />
          <p className="text-xs font-bold text-ink-soft">{labelOf('industry', answers)}／{labelOf('size', answers)}の あなたの会社は</p>
          <h3 className="text-balance text-2xl font-black leading-[1.5] md:text-[1.75rem]">{t.title}</h3>
          <p className="text-sm leading-7 text-ink-soft">{t.body}</p>
          <div className="flex flex-wrap gap-2">{[labelOf('staff', answers) && `担当者：${labelOf('staff', answers)}`, labelOf('budget', answers) && `予算：${labelOf('budget', answers)}`, labelOf('timing', answers)].filter(Boolean).map(chip => <span key={chip as string} className="rounded-full px-3 py-1.5 text-[11px] font-bold" style={{ backgroundColor: tone[t.color].band }}>{chip}</span>)}</div>
        </div>
        <div className="flex flex-col items-center gap-1"><p className="text-xs font-black">いまの状態（100点満点）</p><Radar values={scores} color={t.color} /><p className="text-[10px] text-ink-soft">※回答をもとにした目安です</p></div>
      </div>

      <div>
        <h4 className="mb-4 text-base font-black">あなたにおすすめのサービス</h4>
        <div className="grid gap-5 md:grid-cols-3">{recs.map((r, i) => { const s = services[r.key]; return <Link key={r.key} href={s.href} className="group flex flex-col gap-3 border border-ink bg-white p-6 transition-transform hover:-translate-y-0.5" style={box(s.color, i === 0 ? 8 : 5)}>
          <span className="flex items-center justify-between gap-3"><span className="flex items-center gap-2.5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full font-display text-xs font-black" style={{ backgroundColor: tone[s.color].chip }}>{i + 1}</span><span className="text-base font-black">{s.name}</span></span><span className="font-display text-[11px] font-black">相性 {r.pct}%</span></span>
          <span className="block h-2 rounded-full bg-[#E9ECEF]"><span className="block h-2 rounded-full" style={{ width: `${r.pct}%`, backgroundColor: tone[s.color].dot }} /></span>
          <span className="text-xs leading-6 text-ink-soft">{s.text}</span>
          <span className="mt-auto self-start border-b border-ink pb-0.5 text-[11px] font-black">詳しく見る <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
        </Link> })}</div>
      </div>

      <div>
        <h4 className="mb-4 text-base font-black">最初の一歩（おすすめの進め方）</h4>
        <ol className="grid gap-5 md:grid-cols-3">{roadmaps[g].map(([when, title, text], i) => { const c: Tone = (['mint', 'lilac', 'sky'] as Tone[])[i]; return <li key={when} className="flex flex-col gap-2 border border-ink bg-white p-6" style={box(c)}>
          <span className="font-display text-[11px] font-black text-ink-soft">STEP {i + 1}・{when}</span>
          <span className="text-lg font-black">{title}</span>
          <span className="text-xs leading-6 text-ink-soft">{text}</span>
        </li> })}</ol>
      </div>

      <div className="grid gap-5 md:grid-cols-2">{adv.map(([title, text], i) => { const c: Tone = i === 0 ? 'sky' : 'peach'; return <div key={title} className="flex gap-3.5 border border-ink bg-white p-5" style={box(c)}>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-black" style={{ backgroundColor: tone[c].chip }} aria-hidden>!</span>
        <span className="flex flex-col gap-1.5"><span className="text-sm font-black">{title}</span><span className="text-xs leading-6 text-ink-soft">{text}</span></span>
      </div> })}</div>

      <div className={`grid gap-5 ${story ? 'md:grid-cols-[1.2fr_.8fr]' : ''}`}>
        <div className="flex flex-col gap-3 border border-ink bg-white p-6 md:p-7" style={box('butter')}>
          <span className="text-base font-black">ご予算について（{labelOf('budget', answers) || '未回答'}）</span>
          <span className="text-[13px] leading-7 text-ink-soft">{budgetAdvice[answers.budget?.[0] ?? 'b4']}</span>
          <span className="text-[11px] text-ink-soft">※ご相談・お見積もりは無料です。ご予算に合わせて組み合わせを調整します。</span>
        </div>
        {story && <Link href={`/works/${story.slug}`} className="group flex flex-col gap-2.5 border border-ink bg-white p-6 transition-transform hover:-translate-y-0.5" style={box('pink')}>
          <span className="flex flex-wrap items-center gap-2 text-[10px] font-bold"><span className="rounded-full px-2.5 py-1" style={{ backgroundColor: tone.pink.chip }}>近い事例</span><span className="text-ink-soft">{story.client}</span></span>
          <span className="text-[15px] font-black leading-7">{story.problem}</span>
          <span className="mt-auto self-start border-b border-ink pb-0.5 text-[11px] font-black">事例を見る <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
        </Link>}
      </div>

      <div className="flex flex-col gap-5 border border-ink p-7 md:flex-row md:items-center md:justify-between md:p-9" style={{ backgroundColor: tone[t.color].band }}>
        <span className="flex flex-col gap-1.5"><span className="text-lg font-black md:text-xl">この結果をもとに、無料で相談する</span><span className="text-xs leading-6 text-ink-soft">診断の回答はお問い合わせフォームに自動で入るので、書き直しは不要です</span></span>
        <span className="flex flex-wrap gap-4">
          <Link href={`/contact?diagnosis=${encodeURIComponent(summary)}`} className="group inline-flex min-h-[3.25rem] items-center gap-6 border border-ink bg-ink px-5 text-xs font-black text-white" style={box(t.color)}>この結果で相談する<span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>
        </span>
      </div>
      <button onClick={reset} className="justify-self-end text-xs font-bold text-ink-soft underline-offset-4 hover:underline">もう一度診断する</button>
    </div>
  }

  const q = questions[step]
  const opts = optionsOf(q, answers)
  return <div className="border border-ink bg-white p-6 md:p-10" style={box(q.color, 6)}>
    <div className="flex items-center justify-between">
      <SectionLabel label={`Question ${step + 1} / ${questions.length}`} color={q.color} />
      {step > 0 && <button onClick={back} className="text-[11px] font-bold text-ink-soft">← ひとつ戻る</button>}
    </div>
    <div className="mt-5 flex gap-1.5" aria-hidden>{questions.map((qq, i) => <span key={qq.id} className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: i <= step ? tone[qq.color].dot : '#e9ecef' }} />)}</div>
    <h3 className="mt-8 text-2xl font-black md:text-3xl">{q.q}</h3>
    {q.note && <p className="mt-2 text-xs text-ink-soft">{q.note}</p>}
    {q.multi ? <>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">{opts.map(o => { const on = multi.includes(o.key); return <button key={o.key} type="button" aria-pressed={on} onClick={() => toggle(o.key)} className={`flex min-h-[3.75rem] items-center gap-3 rounded-xl border px-5 text-left text-sm font-bold transition-colors ${on ? 'border-ink' : 'border-ink/10'}`} style={on ? { backgroundColor: tone[q.color].band } : undefined}>
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-[1.5px] border-ink text-xs font-black" style={{ backgroundColor: on ? tone[q.color].chip : '#fff' }} aria-hidden>{on ? '✓' : ''}</span>{o.label}
      </button> })}</div>
      <div className="mt-8 flex justify-end"><button type="button" disabled={multi.length === 0} onClick={() => answer(q.id, multi)} className="inline-flex min-h-12 items-center gap-6 bg-ink px-5 text-[13px] font-black text-white transition-opacity disabled:opacity-30" style={box(q.color)}>次へ<span aria-hidden>→</span></button></div>
    </> : <div className={`mt-8 grid gap-3 ${opts.length > 6 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'}`}>{opts.map(o => <button key={`${step}-${o.key}`} type="button" onClick={() => answer(q.id, [o.key])} className="group flex min-h-16 items-center justify-between rounded-xl border border-ink/10 px-5 text-left text-sm font-bold transition-colors hover:border-transparent" onMouseEnter={e => (e.currentTarget.style.backgroundColor = tone[q.color].chip)} onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}>{o.label}<span className="text-ink-soft transition-transform group-hover:translate-x-1" aria-hidden>→</span></button>)}</div>}
  </div>
}
