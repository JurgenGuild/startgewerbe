import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] relative overflow-hidden">

      {/* Изумрудное свечение */}
      <div className="absolute -left-64 -top-64 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 65%)' }}
      />
      <div className="absolute -right-32 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 65%)' }}
      />

      {/* Точки */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      {/* Навбар */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/5">
        <div className="text-xl font-bold">
          <span className="text-white">Start</span>
          <span className="text-[#10B981]">Gewerbe</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/50 border border-white/10 rounded-lg px-3 py-1.5 cursor-pointer hover:border-white/20 transition-colors">
          🌐 RU
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Левая колонка */}
          <div>
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-medium text-[#10B981]"
              style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}
            >
              🇩🇪 Легальная работа в Германии
            </div>

            {/* Заголовок */}
            <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
              Открой Gewerbe<br />
              за 10 минут.<br />
              <span className="text-[#10B981]">Банки вернут тебе<br />до €240 бонусами.</span>
            </h1>

            {/* Подзаголовок */}
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-md">
              Мы берём бюрократию на себя — просто ответь на 5 вопросов на русском. Встроенный пакет бизнес-счетов полностью покроет стоимость регистрации.
            </p>

            {/* CTA */}
            <a href="#start"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:-translate-y-0.5 group"
              style={{ background: '#10B981', boxShadow: '0 8px 32px rgba(16,185,129,0.35)' }}
            >
              Начать регистрацию (5 минут)
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Банки */}
            <div className="mt-10 pt-8 border-t border-white/8">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Банки-партнёры</p>
              <div className="flex items-center gap-6">
                {['Vivid', 'Holvi', 'Kontist', 'Wero'].map(bank => (
                  <span key={bank} className="text-sm font-semibold text-white/25 tracking-wider uppercase hover:text-white/50 transition-colors cursor-default">
                    {bank}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/20">🔒 Зарегистрировано в ЕС | GDPR | SSL</p>
            </div>
          </div>

          {/* Правая колонка — мокап */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-72">

              {/* Бонус бейдж */}
              <div className="absolute -right-4 top-4 z-10 px-4 py-2 rounded-full text-sm font-bold text-white"
                style={{ background: '#10B981', boxShadow: '0 4px 20px rgba(16,185,129,0.5)', animation: 'bounce 2s infinite' }}
              >
                +€240 Бонус
              </div>

              {/* Телефон */}
              <div className="rounded-[2.5rem] p-3"
                style={{ background: '#1E293B', boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(16,185,129,0.15), 0 0 50px rgba(16,185,129,0.08)' }}
              >
                <div className="rounded-[2rem] overflow-hidden" style={{ background: '#0F172A', border: '1px solid rgba(16,185,129,0.08)' }}>

                  {/* Статус бар */}
                  <div className="flex justify-between items-center px-6 py-3" style={{ background: '#1E293B' }}>
                    <span className="text-xs text-white/50 font-medium">9:41</span>
                    <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>

                  {/* Контент */}
                  <div className="p-6 space-y-5">

                    {/* Прогресс */}
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-white font-semibold">Шаг 4 из 5</span>
                        <span className="text-white/40">80%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#1E293B' }}>
                        <div className="h-full w-4/5 rounded-full" style={{ background: 'linear-gradient(90deg, #10B981, #34D399)' }} />
                      </div>
                    </div>

                    {/* Подпись */}
                    <div>
                      <p className="text-xs text-white font-semibold mb-2">Ваша подпись</p>
                      <div className="rounded-xl p-4 relative" style={{ background: '#1E293B', border: '1px solid #334155' }}>
                        <svg className="w-full h-12" viewBox="0 0 200 50" fill="none">
                          <path d="M10 40 Q28 8 50 36 T90 30 T130 38 T170 22" stroke="#10B981" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </svg>
                        <span className="absolute bottom-2 right-3 text-[#10B981] text-xs">✏️</span>
                      </div>
                    </div>

                    {/* Сохранено */}
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
                      style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                    >
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#10B981' }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-[#10B981]">Данные сохранены</span>
                    </div>

                    {/* Кнопка */}
                    <button className="w-full py-3.5 rounded-xl text-sm font-semibold text-white"
                      style={{ background: '#10B981', boxShadow: '0 4px 15px rgba(16,185,129,0.25)' }}
                    >
                      Продолжить
                    </button>
                  </div>
                </div>
              </div>

              {/* Свечение под телефоном */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full"
                style={{ background: 'rgba(16,185,129,0.2)', filter: 'blur(24px)' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </main>
  )
}
