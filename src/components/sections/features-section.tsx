import { motion } from "framer-motion"

const schedule = [
  { time: "11:30", label: "Сбор гостей", icon: "✦" },
  { time: "12:00", label: "Торжественная регистрация", icon: "💍" },
  { time: "13:00", label: "Килен төшөрөү", icon: "🌙" },
  { time: "16:00", label: "Праздничный банкет", icon: "🥂" },
  { time: "23:00", label: "Завершение вечера", icon: "✨" },
]

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24 relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(40 25% 88% / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(40 25% 88% / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm uppercase tracking-[0.35em] mb-3"
            style={{ color: "hsl(40 20% 50%)", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Программа дня
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: "hsl(40 25% 80%)",
            }}
          >
            26 июня 2026
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: "hsl(40 20% 35%)" }} />
            <span style={{ color: "hsl(40 20% 45%)", fontSize: "10px" }}>✦</span>
            <div className="h-px w-16" style={{ background: "hsl(40 20% 35%)" }} />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[88px] md:left-[108px] top-0 bottom-0 w-px"
            style={{ background: "hsl(40 20% 28%)" }}
          />

          <div className="flex flex-col">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-6 md:gap-8 py-6 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                {/* Time */}
                <div
                  className="w-[80px] md:w-[100px] text-right flex-shrink-0"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(18px, 4vw, 24px)",
                    color: "hsl(40 25% 72%)",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.time}
                </div>

                {/* Dot on line */}
                <div
                  className="w-3 h-3 rounded-full border flex-shrink-0 relative z-10 ml-[-6px]"
                  style={{
                    borderColor: "hsl(40 25% 55%)",
                    background: "hsl(50 8% 10%)",
                    boxShadow: "0 0 8px hsl(40 25% 55% / 0.3)",
                  }}
                />

                {/* Label */}
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(16px, 3.5vw, 20px)",
                      color: "hsl(40 20% 75%)",
                      fontStyle: "italic",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
