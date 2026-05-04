import { motion } from "framer-motion"

const locations = [
  {
    time: "12:00",
    type: "Регистрация",
    icon: "💍",
    name: "Деревня Таваканово",
    address: "Кугарчинский район, д. Таваканово",
    mapUrl: "https://2gis.ru/search/%D0%A2%D0%B0%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE%20%D0%9A%D1%83%D0%B3%D0%B0%D1%80%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD",
    yandexUrl: "https://yandex.ru/maps/?text=%D0%9A%D1%83%D0%B3%D0%B0%D1%80%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD+%D0%A2%D0%B0%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE",
    accent: "hsl(38 42% 65%)",
    gradient: "radial-gradient(circle at 75% 25%, hsl(35 38% 20%) 0%, transparent 60%)",
  },
  {
    time: "16:00",
    type: "Банкет",
    icon: "🥂",
    name: "База отдыха «Лесная сказка»",
    address: "Кугарчинский район, Мурадымовское ущелье",
    mapUrl: "https://2gis.ru/search/%D0%9C%D1%83%D1%80%D0%B0%D0%B4%D1%8B%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%83%D1%89%D0%B5%D0%BB%D1%8C%D0%B5%20%D0%9B%D0%B5%D1%81%D0%BD%D0%B0%D1%8F%20%D1%81%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0",
    yandexUrl: "https://yandex.ru/maps/?text=%D0%9C%D1%83%D1%80%D0%B0%D0%B4%D1%8B%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5+%D1%83%D1%89%D0%B5%D0%BB%D1%8C%D0%B5+%D0%9B%D0%B5%D1%81%D0%BD%D0%B0%D1%8F+%D1%81%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0",
    accent: "hsl(32 38% 58%)",
    gradient: "radial-gradient(circle at 25% 75%, hsl(28 32% 18%) 0%, transparent 60%)",
  },
]

export function LocationSection() {
  return (
    <section className="bg-background px-6 py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm uppercase tracking-[0.35em] mb-3"
            style={{ color: "hsl(35 18% 48%)", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Адреса
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(38 35% 78%)" }}
          >
            Где нас найти
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: "hsl(30 18% 30%)" }} />
            <span style={{ color: "hsl(35 18% 40%)", fontSize: "10px" }}>✦</span>
          </div>
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              className="relative rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* BG */}
              <div
                className="absolute inset-0"
                style={{
                  background: `${loc.gradient}, hsl(25 18% 14%)`,
                }}
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ border: `1px solid ${loc.accent}25` }}
              />
              {/* Glow circle */}
              <div
                className="absolute -top-20 -right-20 w-52 h-52 rounded-full opacity-[0.08]"
                style={{ background: loc.accent }}
              />

              <div className="relative z-10 p-8 md:p-10 flex flex-col gap-5">

                {/* Time badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-4 py-1.5 rounded-full text-sm"
                    style={{
                      background: `${loc.accent}18`,
                      border: `1px solid ${loc.accent}35`,
                      color: loc.accent,
                      fontFamily: "'Cormorant Garamond', serif",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {loc.time} · {loc.type}
                  </span>
                  <span className="text-2xl">{loc.icon}</span>
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "clamp(28px, 5vw, 38px)",
                    color: loc.accent,
                    lineHeight: 1.2,
                  }}
                >
                  {loc.name}
                </h3>

                {/* Address */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(15px, 2.8vw, 17px)",
                    color: "hsl(38 22% 62%)",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  {loc.address}
                </p>

                {/* Map buttons */}
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: loc.accent,
                      color: "hsl(25 18% 12%)",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      letterSpacing: "0.03em",
                    }}
                  >
                    <span>📍</span>
                    Открыть в 2ГИС
                  </a>
                  <a
                    href={loc.yandexUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: "transparent",
                      border: `1px solid ${loc.accent}40`,
                      color: "hsl(38 25% 65%)",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "15px",
                    }}
                  >
                    <span>🗺️</span>
                    Яндекс Карты
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
