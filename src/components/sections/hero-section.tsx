import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6 py-16">

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(40 25% 88% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(40 25% 88% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Corner dots */}
      {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-1.5 h-1.5 rounded-full bg-foreground/15`} />
      ))}

      {/* Main cream circle */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="relative w-[300px] h-[300px] md:w-[440px] md:h-[440px] rounded-full flex flex-col items-center justify-center"
          style={{ background: "hsl(44 55% 88%)" }}
        >
          {/* Border rings */}
          <div className="absolute inset-3 rounded-full border" style={{ borderColor: "hsl(30 20% 40%)", opacity: 0.5 }} />
          <div className="absolute inset-5 rounded-full border" style={{ borderColor: "hsl(30 20% 40%)", opacity: 0.2 }} />

          {/* Constellation SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 440 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.22" stroke="hsl(30 30% 28%)" strokeWidth="0.8">
              <line x1="110" y1="125" x2="185" y2="172" />
              <line x1="185" y1="172" x2="248" y2="145" />
              <line x1="248" y1="145" x2="325" y2="115" />
              <line x1="325" y1="115" x2="365" y2="162" />
              <line x1="185" y1="172" x2="220" y2="240" />
              <line x1="248" y1="145" x2="220" y2="240" />
              <line x1="110" y1="295" x2="172" y2="268" />
              <line x1="172" y1="268" x2="220" y2="240" />
              <line x1="330" y1="290" x2="268" y2="262" />
              <line x1="268" y1="262" x2="220" y2="240" />
            </g>
            <g fill="hsl(30 30% 28%)" opacity="0.35">
              <circle cx="110" cy="125" r="2.5" />
              <circle cx="185" cy="172" r="2" />
              <circle cx="248" cy="145" r="2.5" />
              <circle cx="325" cy="115" r="2" />
              <circle cx="365" cy="162" r="1.5" />
              <circle cx="110" cy="295" r="2" />
              <circle cx="172" cy="268" r="1.5" />
              <circle cx="268" cy="262" r="1.5" />
              <circle cx="330" cy="290" r="2" />
            </g>
            {/* Sparkle stars */}
            <g fill="hsl(30 30% 28%)" opacity="0.45">
              <path d="M145 105 l2.5 7 l2.5 -7 l-2.5 -7 z M138 112 l7 -2.5 l-7 -2.5 l-7 2.5 z" />
              <path d="M358 195 l2 5 l2 -5 l-2 -5 z M353 200 l5 -2 l-5 -2 l-5 2 z" />
            </g>
            <g stroke="hsl(30 30% 28%)" strokeWidth="1" fill="none" opacity="0.25">
              <circle cx="82" cy="148" r="5" />
              <circle cx="375" cy="278" r="4" />
              <circle cx="155" cy="335" r="4" />
              <circle cx="308" cy="342" r="5" />
            </g>
            {/* Moon crescent */}
            <path
              d="M218 242 C218 236 222 232 227 232 C223 235 221 239 221 244 C221 249 223 253 227 256 C222 256 218 252 218 246 Z"
              fill="hsl(30 30% 28%)"
              opacity="0.45"
            />
          </svg>

          {/* Monogram */}
          <div className="relative z-10 flex flex-col items-center mt-[-16px]">
            <div className="flex items-end gap-3 md:gap-5 leading-none select-none">
              <span
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(68px, 17vw, 105px)",
                  color: "hsl(30 25% 24%)",
                  lineHeight: 1,
                  transform: "rotate(-5deg) translateY(6px)",
                  display: "block",
                }}
              >
                Т
              </span>
              <span
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(68px, 17vw, 105px)",
                  color: "hsl(30 25% 24%)",
                  lineHeight: 1,
                  transform: "rotate(5deg) translateY(6px)",
                  display: "block",
                }}
              >
                Г
              </span>
            </div>

            {/* Names */}
            <div
              className="flex items-center gap-2 mt-2"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(20px, 5vw, 28px)",
                color: "hsl(30 22% 28%)",
              }}
            >
              <span>Тимур</span>
              <span style={{ fontSize: "0.45em", marginBottom: "-2px" }}>✦</span>
              <span>Галима</span>
            </div>

            {/* Date */}
            <p
              className="mt-1.5"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(12px, 2.8vw, 16px)",
                color: "hsl(30 18% 34%)",
                letterSpacing: "0.14em",
              }}
            >
              26.06.2026
            </p>
          </div>
        </div>
      </motion.div>

      {/* Text below circle */}
      <motion.div
        className="mt-10 text-center flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <p
          className="max-w-xs md:max-w-md leading-relaxed"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(16px, 3.8vw, 22px)",
            color: "hsl(40 28% 74%)",
            letterSpacing: "0.03em",
            lineHeight: 1.7,
          }}
        >
          Приглашаем вас разделить с нами чудесный праздник,
          посвящённый дню рождения нашей семьи
        </p>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          className="w-5 h-9 rounded-full border border-foreground/20 flex items-start justify-center p-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <div className="w-0.5 h-1.5 rounded-full bg-foreground/35" />
        </motion.div>
      </motion.div>
    </section>
  )
}