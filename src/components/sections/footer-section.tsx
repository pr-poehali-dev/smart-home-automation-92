import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 via-pink-100 to-amber-100 opacity-50 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-7xl md:text-9xl text-foreground"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400 }}
            >
              Тимур <span className="text-primary">&</span> Галима
            </h2>

            <motion.div
              className="flex items-center justify-center gap-4 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-px w-16 bg-primary/30" />
              <p className="text-base md:text-lg tracking-[0.4em] text-muted-foreground font-light">
                20 · 06 · 2026
              </p>
              <div className="h-px w-16 bg-primary/30" />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-sm max-w-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Мы будем счастливы разделить этот особенный день вместе с вами. Ждём вас с открытым сердцем!
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-4xl">🌹</span>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col items-center gap-2">
          <p className="text-muted-foreground text-sm">
            С любовью, Тимур и Галима ✦ 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
