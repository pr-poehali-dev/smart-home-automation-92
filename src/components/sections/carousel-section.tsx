import { motion } from "framer-motion"

const weddingImage = "https://cdn.poehali.dev/projects/9c2010c8-b1d5-46ef-95a0-55b967bebd39/files/e53b9f69-bf98-4c11-b0cb-cee2788c2b44.jpg"

const quotes = [
  { text: "Любовь — это не смотреть друг на друга, а смотреть вместе в одном направлении.", author: "Антуан де Сент-Экзюпери" },
  { text: "Счастье не в том, чтобы делать то, что хочешь, а в том, чтобы хотеть то, что делаешь.", author: "Лев Толстой" },
  { text: "Брак — это долгий разговор, который всегда кажется слишком коротким.", author: "Андре Моруа" },
  { text: "Любить — значит видеть чудо, незримое для других.", author: "Франсуа Мориак" },
]

export function CarouselSection() {
  const items = [...quotes, ...quotes]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl text-primary-foreground"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Слова о любви
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((quote, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[340px] md:w-[420px] rounded-2xl bg-primary-foreground/10 backdrop-blur p-8 border border-white/20"
            >
              <p
                className="text-primary-foreground text-lg leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
              >
                «{quote.text}»
              </p>
              <p className="text-primary-foreground/60 text-sm mt-4">— {quote.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
