import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0.2, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center bg-background px-6 py-28"
    >
      <div className="max-w-4xl mx-auto relative">
        <h2
          className="text-4xl md:text-6xl lg:text-7xl leading-tight text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "hsl(40 15% 22%)",
          }}
        >
          Два сердца.
          <br />
          Одна история на всю жизнь.
        </h2>

        <motion.h2
          className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl leading-tight text-center"
          style={{
            clipPath,
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            background: "linear-gradient(135deg, hsl(38 35% 72%), hsl(40 25% 85%), hsl(38 35% 65%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Два сердца.
          <br />
          Одна история на всю жизнь.
        </motion.h2>
      </div>
    </section>
  )
}
