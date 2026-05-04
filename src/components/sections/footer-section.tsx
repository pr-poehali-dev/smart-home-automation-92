import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(40 25% 88% / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(40 25% 88% / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none">
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, hsl(38 40% 65%), transparent)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-8">

        {/* Small circle monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-32 h-32 rounded-full flex items-center justify-center"
          style={{ background: "hsl(40 25% 88%)" }}
        >
          <div className="absolute inset-2 rounded-full border" style={{ borderColor: "hsl(30 20% 40%)", opacity: 0.4 }} />
          <span
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "52px",
              color: "hsl(30 25% 28%)",
              lineHeight: 1,
            }}
          >
            Т&Г
          </span>
        </motion.div>

        <motion.h2
          className="leading-none"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(40px, 10vw, 72px)",
            color: "hsl(40 25% 80%)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Тимур & Галима
        </motion.h2>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="h-px w-14" style={{ background: "hsl(40 20% 32%)" }} />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px",
              color: "hsl(40 18% 52%)",
              letterSpacing: "0.3em",
            }}
          >
            26 · 06 · 2026
          </p>
          <div className="h-px w-14" style={{ background: "hsl(40 20% 32%)" }} />
        </motion.div>

        <motion.p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 3vw, 18px)",
            color: "hsl(40 15% 48%)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          С любовью и радостью ждём вас в этот особенный день
        </motion.p>

        <div className="mt-8 pt-8 border-t w-full" style={{ borderColor: "hsl(40 15% 20%)" }}>
          <p style={{ color: "hsl(40 12% 38%)", fontSize: "13px", fontFamily: "'Cormorant Garamond', serif" }}>
            Тимур & Галима ✦ 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
