import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const sections = [
  {
    icon: "💛",
    text: "В качестве подарка будем благодарны за вклад в бюджет нашей молодой семьи",
  },
  {
    icon: "🍾",
    text: "Если вы планировали захватить с собой букетик цветов — бутылочка любимого напитка с вашими пожеланиями и подписью будет ему лучшей заменой!",
  },
]

const accent = "hsl(38 40% 68%)"
const bg = "hsl(28 22% 15%)"
const pattern = "radial-gradient(circle at 80% 20%, hsl(35 40% 22%) 0%, transparent 60%), radial-gradient(circle at 20% 80%, hsl(28 30% 18%) 0%, transparent 50%)"

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={containerRef} className="bg-background px-6 py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto">

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
            Пожелания
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: "hsl(30 18% 30%)" }} />
            <span style={{ color: "hsl(35 18% 40%)", fontSize: "10px" }}>✦</span>
          </div>
        </motion.div>

        {/* Single card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{ y }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Card background */}
          <div className="absolute inset-0" style={{ background: `${pattern}, ${bg}` }} />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl" style={{ border: `1px solid ${accent}30` }} />

          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10" style={{ background: accent }} />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-[0.07]" style={{ background: accent }} />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 flex flex-col gap-10">
            {sections.map((s, i) => (
              <div key={i}>
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0 mt-1"
                    style={{
                      background: `${accent}18`,
                      border: `1px solid ${accent}35`,
                    }}
                  >
                    {s.icon}
                  </div>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "clamp(16px, 3vw, 19px)",
                      color: "hsl(38 25% 72%)",
                      lineHeight: 1.8,
                    }}
                  >
                    {s.text}
                  </p>
                </div>
                {i < sections.length - 1 && (
                  <div className="h-px mt-8" style={{ background: `${accent}20` }} />
                )}
              </div>
            ))}

            {/* Bottom star row */}
            <div className="flex items-center gap-2 pt-2">
              {[...Array(5)].map((_, j) => (
                <span key={j} style={{ color: accent, fontSize: "8px", opacity: 0.4 + j * 0.1 }}>✦</span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
