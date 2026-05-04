import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const gifts = [
  {
    icon: "💛",
    title: "Конверт",
    text: "В качестве подарка будем благодарны за вклад в бюджет нашей молодой семьи",
    bg: "hsl(30 22% 16%)",
    accent: "hsl(38 40% 68%)",
    pattern: "radial-gradient(circle at 80% 20%, hsl(35 40% 22%) 0%, transparent 60%), radial-gradient(circle at 20% 80%, hsl(28 30% 18%) 0%, transparent 50%)",
  },
  {
    icon: "🍾",
    title: "Бутылочка",
    text: "Если вы планировали захватить с собой букетик цветов — бутылочка любимого напитка с вашими пожеланиями и подписью будет ему лучшей заменой!",
    bg: "hsl(25 20% 14%)",
    accent: "hsl(32 35% 58%)",
    pattern: "radial-gradient(circle at 20% 20%, hsl(30 35% 20%) 0%, transparent 55%), radial-gradient(circle at 80% 75%, hsl(25 25% 16%) 0%, transparent 50%)",
  },
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const yValues = [y1, y2]

  return (
    <section ref={containerRef} className="bg-background px-6 py-28 overflow-hidden">
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
            Пожелания
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(38 35% 78%)" }}
          >
            Подарки
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: "hsl(30 18% 30%)" }} />
            <span style={{ color: "hsl(35 18% 40%)", fontSize: "10px" }}>✦</span>
          </div>
        </motion.div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {gifts.map((gift, i) => (
            <motion.div
              key={i}
              className="relative rounded-3xl overflow-hidden"
              style={{ y: yValues[i] }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.015 }}
            >
              {/* Card background */}
              <div
                className="absolute inset-0"
                style={{ background: `${gift.pattern}, ${gift.bg}` }}
              />

              {/* Border */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ border: `1px solid ${gift.accent}30` }}
              />

              {/* Decorative circle top-right */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10"
                style={{ background: gift.accent }}
              />
              <div
                className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-[0.07]"
                style={{ background: gift.accent }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col gap-6 min-h-[320px] md:min-h-[380px]">

                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                  style={{
                    background: `${gift.accent}18`,
                    border: `1px solid ${gift.accent}35`,
                  }}
                >
                  {gift.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "clamp(30px, 6vw, 42px)",
                    color: gift.accent,
                    lineHeight: 1.1,
                  }}
                >
                  {gift.title}
                </h3>

                {/* Divider */}
                <div className="h-px w-12" style={{ background: `${gift.accent}40` }} />

                {/* Text */}
                <p
                  className="leading-relaxed flex-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(16px, 3vw, 19px)",
                    color: "hsl(38 25% 72%)",
                    lineHeight: 1.8,
                  }}
                >
                  {gift.text}
                </p>

                {/* Bottom star row */}
                <div className="flex items-center gap-2 mt-auto pt-2">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: `${gift.accent}`, fontSize: "8px", opacity: 0.4 + j * 0.1 }}>✦</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
