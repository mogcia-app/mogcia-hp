import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export default function PhilosophyPage() {
  return (
    <main className="bg-white text-gray-900">

      <section className="relative h-[80vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/istockphoto-2196775101-640_adpp_is.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Philosophy</p>
            <h1 className="text-3xl md:text-5xl font-light tracking-wide">
            私たちの想い
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
            私たちは、AI・デジタル技術を通じて企業の未来を創造することを使命としています。<br />
            お客様一人ひとりの課題に向き合い、最適なソリューションを提供することで、 持続的な成長と発展を実現します。
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-white via-[#f6f7fb] to-[#eef0f6]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 overflow-hidden shadow-[0_18px_55px_rgba(24,32,56,0.12)]">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10 text-sm md:text-base text-gray-600">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">
              人とAIの共創で、新しい価値を生み出す
              </h2>
              <p>
              MOGCIAは、人の想像力とAIの知性で、企業の可能性を広げます。
              私たちは、AIを人の代わりではなく、共に歩むパートナーと考えます。
              人の創造に寄り添い、その力をAIで拡張する。
              未来をともに描く——　その共創の起点であり続けます。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            {[
              {
                number: '01',
                title: 'Co-Creation',
                subtitle: '共創による価値設計',
                body: 'クライアントと共に目的地を描き、成果につながる体験を共創します。',
              },
              {
                number: '02',
                title: 'Human × AI',
                subtitle: '人とAIが響き合う設計思想',
                body: 'AIを人の代替ではなく、共に価値を生み出すパートナーと捉え、創造性を拡張する仕組みを提供します。',
              },
              {
                number: '03',
                title: 'Future Ready',
                subtitle: '未来へ続く基盤づくり',
                body: '変化に強い仕組みと継続的なチューニングで、未来へつながる価値を育てます。',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-4 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <span className="text-sm uppercase tracking-[0.35em] text-gray-400">{item.number}</span>
                <h3 className="text-lg font-light text-gray-900">{item.title}</h3>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">{item.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-8 relative z-10 text-sm md:text-base text-gray-600 leading-relaxed">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Corporate Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">企業理念</h2>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  2023年11月の設立から現在まで、私たちは一貫して AI・デジタル技術で企業の未来を創造することを使命として歩んできました。
                </p>
              </div>
              <p>
                人の創造性とAIの知性が響き合うことで、企業の可能性は無限に広がります。MOGCIAは、その共創が自然と生まれる環境を整え、
                価値の連鎖を生み出す「仕組み」と「体験」を提供します。
              </p>
              <p>
                私たちが届けたいのは単なるテクノロジーではなく、人が本来持つ力を引き出し、未来へとつながる意思決定を支えるプラットフォーム。
                企業のビジョンと日々の実行をつなぎ、持続的な成長を共に描きます。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Guiding Principle　ー',
                subtitle: '人の想像力を起点に成果へ導く',
                body: 'クライアントの課題に寄り添い、人の感性とAIの知性が調和する現場をつくり、成果へとつながる体験を実装します。',
              },
              {
                title: 'Vision　ー',
                subtitle: 'AIと共に描く未来のスタンダード',
                body: '変化を楽しめる未来を描き、AI・デジタル技術で企業の持続的成長と新たな価値創造を提供します。',
              },
              {
                title: 'Values　ー',
                subtitle: '共創・透明性・学習の循環',
                body: '共創・透明性・学習の循環を重んじ、関わる人すべてが価値創出に参加できる仕組みを育みます。',
              },
            ].map((philosophy, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <h3 className="text-lg font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {philosophy.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{philosophy.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{philosophy.body}</p>
              </div>
            ))}
          </div>

          <div className="group relative border border-gray-200 bg-white px-12 py-14 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-8 relative z-10">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Philosophy Core</p>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900">理念の核心</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  私たちの理念は単なる言葉ではなく、日々の行動と意思決定の指針となっています。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {[
                  {
                    title: '目的志向',
                    body: 'すべての行動が企業の未来創造という目的に繋がっている。',
                  },
                  {
                    title: '継続改善',
                    body: '実践から学び、常に改善を重ねるサイクルを回し続ける。',
                  },
                  {
                    title: '共創精神',
                    body: 'クライアントと共に課題を解決し、価値を創造する。',
                  },
                  {
                    title: '革新追求',
                    body: '最新技術を積極的に取り入れ、常に前進し続ける。',
                  },
                ].map((core, index) => (
                  <div
                    key={index}
                    className="relative border border-gray-200 bg-white/95 px-6 py-8 flex flex-col gap-4 shadow-[0_8px_30px_rgba(24,32,56,0.08)]"
                  >
                    <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                    <h4 className="text-base md:text-lg font-light text-gray-900 tracking-wide">{core.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{core.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Mission</p>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900">人の創造力に寄り添い、未来を共創する</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10 text-sm md:text-base text-gray-600 leading-relaxed">
                <p>
                  変化の激しい時代において、企業や個人が持つ創造性を最大限に活かすためには、テクノロジーとデザインの双方が不可欠です。
                  MOGCIAは課題を正しく見立て、スピードと品質を両立するソリューションで新しい価値を提供します。
                </p>
                <p>
                  私たちは単なるベンダーではなく、共に未来のゴールを描き、到達するための伴走者であり続けます。
                  パートナーとしての姿勢を大切にし、成果につながる体験を共創します。
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="text-xl md:text-2xl font-light text-gray-900">コアバリュー</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-stretch">
              {[
                {
                  initial: 'M',
                  tag: 'Mindset', title: 'Mission', body: '使命を果たすために、プロジェクトの目的と成果にコミットします。' },
                { initial: 'O', tag: 'Creativity', title: 'Originality', body: '独創的な発想を大切にし、常に新しいアプローチを模索します。' },
                { initial: 'G', tag: 'Growth', title: 'Growth', body: 'クライアントと共に学び、事業成長を実現するための仕組みを構築します。' },
                { initial: 'C', tag: 'Challenge', title: 'Challenge', body: '既存の枠を超える挑戦を恐れず、未来を切り拓く行動を続けます。' },
                { initial: 'I', tag: 'Innovation', title: 'Innovation', body: 'AI とデータを駆使し、価値あるイノベーションを生み出します。' },
                { initial: 'A', tag: 'Impact', title: 'Achievement', body: '成果につながるアウトプットを重視し、確かなインパクトを届けます。' },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)] h-full"
                >
                  <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 border border-gray-200 flex items-center justify-center text-2xl font-semibold text-gray-900">
                      {value.initial}
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                        {value.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.25em] text-gray-400">{value.tag}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-white via-[#f6f7fb] to-[#eef0f6]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-8 relative z-10 text-sm md:text-base text-gray-600 leading-relaxed">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Message</p>
                <h3 className="text-2xl font-light text-gray-900">代表メッセージ</h3>
              </div>
              <p>
                MOGCIA は「AI が支え、人の創造力が未来を動かす」という言葉を掲げています。
                テクノロジーは人の代わりではなく、人がより創造的なことに注力するための土台です。
                その土台を整えることで、企業も社会も持続的に成長できると信じています。
              </p>
              <p>
                私たちは常に「人」を中心に考え、データやAI を活用して最適な選択肢を提案します。
                少しでも未来を良くするために、クライアントの皆さまと共に歩み続けていきます。
              </p>
              <p className="text-sm text-gray-500">代表取締役</p>
            </div>
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <ContactSection />

      <Footer />
    </main>
  )
}
