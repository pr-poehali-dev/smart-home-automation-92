import { motion } from "framer-motion"

const rsvpOptions = [
  {
    name: "Приду!",
    description: "С радостью разделю ваш праздник",
    features: ["Приду на церемонию", "Приду на банкет", "Танцую до утра", "Везу подарок с душой"],
    emoji: "🥂",
    popular: true,
  },
  {
    name: "К сожалению, нет",
    description: "Буду с вами мысленно",
    features: ["Присылаю поздравления", "Желаю счастья и любви", "Жду следующей встречи", "Обниму при первой возможности"],
    emoji: "💌",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="px-6 py-24 relative" style={{ background: "hsl(50 8% 9%)" }}>
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(40 25% 88% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(40 25% 88% / 0.4) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm uppercase tracking-[0.35em] mb-3"
            style={{ color: "hsl(40 18% 48%)", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Подтверждение
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: "hsl(40 25% 78%)",
            }}
          >
            Вы придёте?
          </h2>
          <p
            className="mt-3 max-w-sm mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "hsl(40 15% 50%)",
              fontSize: "16px",
            }}
          >
            Просим дать ответ до 31 мая 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-14" style={{ background: "hsl(40 18% 28%)" }} />
            <span style={{ color: "hsl(40 18% 40%)", fontSize: "10px" }}>✦</span>
            <div className="h-px w-14" style={{ background: "hsl(40 18% 28%)" }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {rsvpOptions.map((option, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl p-8 border"
              style={{
                background: option.popular ? "hsl(50 8% 13%)" : "hsl(50 8% 11%)",
                borderColor: option.popular ? "hsl(40 25% 40%)" : "hsl(40 15% 22%)",
                boxShadow: option.popular ? "0 0 30px hsl(40 25% 35% / 0.15)" : "none",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 0.98 }}
            >
              {option.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-4 py-1 rounded-full"
                  style={{
                    background: "hsl(38 40% 65%)",
                    color: "hsl(50 8% 10%)",
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  Будем рады!
                </span>
              )}

              <div className="text-center pb-6 border-b" style={{ borderColor: "hsl(40 15% 22%)" }}>
                <span className="text-4xl">{option.emoji}</span>
                <h3
                  className="mt-3 text-2xl"
                  style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(40 22% 78%)" }}
                >
                  {option.name}
                </h3>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "hsl(40 12% 48%)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                >
                  {option.description}
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {option.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span style={{ color: "hsl(38 35% 62%)", fontSize: "12px" }}>✦</span>
                    <span
                      className="text-sm"
                      style={{ color: "hsl(40 18% 65%)", fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full mt-8 py-3 px-6 rounded-xl font-medium transition-all"
                style={
                  option.popular
                    ? {
                        background: "hsl(38 40% 65%)",
                        color: "hsl(50 8% 10%)",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "16px",
                        letterSpacing: "0.05em",
                      }
                    : {
                        background: "transparent",
                        color: "hsl(40 18% 58%)",
                        border: "1px solid hsl(40 15% 28%)",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "16px",
                      }
                }
              >
                {option.popular ? "Подтвердить участие" : "Сообщить об отсутствии"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
