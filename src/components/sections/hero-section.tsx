import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const weddingImage = "https://cdn.poehali.dev/projects/9c2010c8-b1d5-46ef-95a0-55b967bebd39/files/e53b9f69-bf98-4c11-b0cb-cee2788c2b44.jpg"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const rotate1 = useTransform(scrollYProgress, [0, 1], [-6, -20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 0])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [6, 20])
  const x1 = useTransform(scrollYProgress, [0, 1], [-80, -280])
  const x3 = useTransform(scrollYProgress, [0, 1], [80, 280])
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 py-24"
    >
      {/* Decorative background petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[8%] w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute bottom-[20%] right-[10%] w-48 h-48 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-[40%] right-[5%] w-24 h-24 rounded-full bg-accent/30 blur-xl" />
      </div>

      {/* Stacked images */}
      <div className="relative flex items-center justify-center">
        {/* Left decorative image */}
        <motion.div
          className="absolute w-[220px] md:w-[260px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate1, x: x1, y, zIndex: 1 }}
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={weddingImage}
            alt="Свадьба"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </motion.div>

        {/* Center main image */}
        <motion.div
          className="relative w-[260px] md:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate2, y, zIndex: 2 }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={weddingImage}
            alt="Свадебное фото"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right decorative image */}
        <motion.div
          className="absolute w-[220px] md:w-[260px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          style={{ rotate: rotate3, x: x3, y, zIndex: 1 }}
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={weddingImage}
            alt="Свадьба"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </motion.div>
      </div>

      {/* Names and date overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 gap-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <motion.p
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/80 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          приглашают на свадьбу
        </motion.p>

        <h1
          className="text-6xl md:text-8xl lg:text-9xl text-center text-foreground mix-blend-multiply leading-none"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400 }}
        >
          Тимур
          <br />
          <span className="text-primary">&</span>
          <br />
          Галима
        </h1>

        <motion.div
          className="flex items-center gap-4 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <div className="h-px w-12 bg-primary/40" />
          <p className="text-sm md:text-base tracking-[0.3em] text-foreground/60 font-light">
            20 · 06 · 2026
          </p>
          <div className="h-px w-12 bg-primary/40" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
