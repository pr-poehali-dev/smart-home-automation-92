import { useState } from "react"
import { motion } from "framer-motion"

const RSVP_URL = "https://functions.poehali.dev/d84c0119-3836-4865-b498-40569b3b3559"

export function PricingSection() {
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")
  const [chosen, setChosen] = useState<"yes" | "no" | null>(null)

  async function submit(answer: "yes" | "no") {
    if (!name.trim()) {
      setChosen(answer)
      return
    }
    setStatus("loading")
    setChosen(answer)
    await fetch(RSVP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim(), answer }),
    })
    setStatus("done")
  }

  return (
    <section className="px-6 py-24 relative" style={{ background: "hsl(50 8% 9%)" }}>
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(40 25% 88% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(40 25% 88% / 0.4) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-md mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm uppercase tracking-[0.35em] mb-3"
            style={{ color: "hsl(40 18% 48%)", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Подтверждение
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(40 25% 78%)" }}
          >
            Вы придёте?
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "hsl(40 15% 50%)",
              fontSize: "16px",
            }}
          >
            Просим дать ответ до 31 мая 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-14" style={{ background: "hsl(40 18% 28%)" }} />
            <span style={{ color: "hsl(40 18% 40%)", fontSize: "10px" }}>✦</span>
            <div className="h-px w-14" style={{ background: "hsl(40 18% 28%)" }} />
          </div>
        </motion.div>

        {status === "done" ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p
              className="text-5xl mb-6"
              style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(38 38% 78%)" }}
            >
              {chosen === "yes" ? "Ждём вас!" : "Будем скучать!"}
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                color: "hsl(40 15% 50%)",
                fontSize: "17px",
              }}
            >
              {chosen === "yes"
                ? "Спасибо, что подтвердили! До встречи на торжестве 💛"
                : "Жаль, что не сможете — мы вас любим 💌"}
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Name input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full py-4 px-5 rounded-2xl outline-none transition-all"
                style={{
                  background: "hsl(50 8% 13%)",
                  border: `1px solid ${name.trim() ? "hsl(38 35% 45%)" : "hsl(40 15% 22%)"}`,
                  color: "hsl(40 22% 80%)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                }}
              />
              {!name.trim() && chosen !== null && (
                <p
                  className="absolute -bottom-5 left-1 text-xs"
                  style={{ color: "hsl(0 55% 55%)", fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Пожалуйста, введите имя
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-2">
              <button
                onClick={() => submit("yes")}
                disabled={status === "loading"}
                className="w-full py-4 px-6 rounded-2xl font-medium transition-all hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: "hsl(38 40% 65%)",
                  color: "hsl(50 8% 10%)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                  letterSpacing: "0.05em",
                }}
              >
                Приду! 🥂
              </button>
              <button
                onClick={() => submit("no")}
                disabled={status === "loading"}
                className="w-full py-4 px-6 rounded-2xl transition-all hover:opacity-80 active:scale-[0.98]"
                style={{
                  background: "transparent",
                  color: "hsl(40 18% 58%)",
                  border: "1px solid hsl(40 15% 28%)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                }}
              >
                К сожалению, не смогу
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
