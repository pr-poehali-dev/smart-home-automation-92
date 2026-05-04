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
      className="relative min-h-[80vh] flex items-center justify-center bg-background px-6 py-32"
    >
      <div className="max-w-5xl mx-auto relative">
        <h2
          className="text-4xl md:text-6xl lg:text-7xl leading-tight text-center text-foreground/10"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          Два сердца.
          <br />
          Одна история на всю жизнь.
        </h2>

        <motion.h2
          className="absolute inset-0 text-4xl md:text-6xl lg:text-7xl leading-tight text-center bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent"
          style={{ clipPath, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          Два сердца.
          <br />
          Одна история на всю жизнь.
        </motion.h2>
      </div>
    </section>
  )
}
