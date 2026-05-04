import { motion } from "framer-motion"

const palette = [
  { name: "Горький шоколад", hex: "#3B2314" },
  { name: "Молочный шоколад", hex: "#7B4F2E" },
  { name: "Карамель", hex: "#C49A6C" },
  { name: "Шампань", hex: "#E8D9BC" },
  { name: "Слоновая кость", hex: "#F5ECD7" },
]

export function DresscodeSection() {
  return (
    <section
      className="relative px-6 py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(25 22% 14%) 0%, hsl(30 25% 18%) 50%, hsl(25 18% 13%) 100%)",
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(38 35% 85% / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(38 35% 85% / 0.6) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t border-l opacity-20" style={{ borderColor: "hsl(38 35% 70%)" }} />
      <div className="absolute top-10 right-10 w-16 h-16 border-t border-r opacity-20" style={{ borderColor: "hsl(38 35% 70%)" }} />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-b border-l opacity-20" style={{ borderColor: "hsl(38 35% 70%)" }} />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r opacity-20" style={{ borderColor: "hsl(38 35% 70%)" }} />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm uppercase tracking-[0.4em] mb-4"
            style={{ color: "hsl(35 25% 52%)", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Дресс-код
          </p>
          <h2
            className="leading-none"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(52px, 14vw, 96px)",
              color: "hsl(40 38% 88%)",
              textShadow: "0 2px 24px hsl(38 40% 60% / 0.18)",
            }}
          >
            Шоколад & Шампань
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-20" style={{ background: "hsl(32 20% 32%)" }} />
            <span style={{ color: "hsl(35 25% 45%)", fontSize: "10px" }}>✦</span>
            <div className="h-px w-20" style={{ background: "hsl(32 20% 32%)" }} />
          </div>
        </motion.div>

        {/* Main text card */}
        <motion.div
          className="relative rounded-2xl p-8 md:p-12 mb-12"
          style={{
            background: "hsl(25 18% 10% / 0.6)",
            border: "1px solid hsl(32 18% 26%)",
            backdropFilter: "blur(10px)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {/* Quote mark */}
          <span
            className="absolute top-4 left-7 text-6xl leading-none opacity-15 select-none"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(38 38% 75%)" }}
          >
            "
          </span>

          <p
            className="relative z-10 text-center leading-[1.9]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(17px, 3.5vw, 21px)",
              color: "hsl(38 28% 74%)",
            }}
          >
            Мы хотим, чтобы вы чувствовали себя максимально комфортно на нашем торжестве и оделись как душе угодно,
            но если всё же есть желание подчеркнуть нотку цветовой гаммы —
            свадьба пройдёт в цвете <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.5em", color: "hsl(38 40% 88%)", fontStyle: "normal", lineHeight: 1 }}>шоколадно-шампань</span>
          </p>

          <span
            className="absolute bottom-4 right-7 text-6xl leading-none opacity-15 select-none rotate-180"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(38 38% 75%)" }}
          >
            "
          </span>
        </motion.div>

        {/* Color palette */}
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "hsl(35 18% 45%)", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Цветовая палитра
          </p>

          <div className="flex items-end gap-3 md:gap-5">
            {palette.map((color, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.07 }}
              >
                <div
                  className="rounded-full border shadow-lg"
                  style={{
                    background: color.hex,
                    width: `${28 + i * 6}px`,
                    height: `${28 + i * 6}px`,
                    borderColor: "hsl(32 18% 30%)",
                    boxShadow: `0 4px 16px ${color.hex}40`,
                  }}
                />
                <p
                  className="text-[10px] text-center whitespace-nowrap hidden md:block"
                  style={{ color: "hsl(35 15% 45%)", fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {color.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}