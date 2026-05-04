import { motion } from "framer-motion"

const quotes = [
  { text: "Любовь — это не смотреть друг на друга, а смотреть вместе в одном направлении.", author: "Антуан де Сент-Экзюпери" },
  { text: "Счастье не в том, чтобы делать то, что хочешь, а в том, чтобы хотеть то, что делаешь.", author: "Лев Толстой" },
  { text: "Брак — это долгий разговор, который всегда кажется слишком коротким.", author: "Андре Моруа" },
  { text: "Любить — значит видеть чудо, незримое для других.", author: "Франсуа Мориак" },
]

export function CarouselSection() {
  const items = [...quotes, ...quotes]

  return (
    <section className="py-20 overflow-hidden relative" style={{ background: "hsl(50 8% 8%)" }}>
      {/* Top border */}
      <div className="w-full h-px mb-12" style={{ background: "hsl(40 18% 22%)" }} />

      <div className="max-w-6xl mx-auto px-6 mb-10">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-12" style={{ background: "hsl(40 20% 35%)" }} />
          <p
            className="text-sm uppercase tracking-[0.35em]"
            style={{ color: "hsl(40 18% 48%)", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Слова о любви
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {items.map((quote, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[380px] rounded-2xl p-7 border"
              style={{
                background: "hsl(50 8% 12%)",
                borderColor: "hsl(40 15% 22%)",
              }}
            >
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(15px, 3vw, 18px)",
                  color: "hsl(40 20% 72%)",
                }}
              >
                «{quote.text}»
              </p>
              <p
                className="mt-4 text-sm"
                style={{ color: "hsl(40 15% 45%)", fontFamily: "'Cormorant Garamond', serif" }}
              >
                — {quote.author}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="w-full h-px mt-12" style={{ background: "hsl(40 18% 22%)" }} />
    </section>
  )
}
