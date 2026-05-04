import { motion } from "framer-motion"

const details = [
  {
    icon: "💍",
    title: "Церемония",
    description: "Торжественная регистрация брака в кругу самых близких и родных.",
    time: "15:00",
  },
  {
    icon: "🌹",
    title: "Банкет",
    description: "Праздничный ужин, танцы и море счастья до самого рассвета.",
    time: "18:00",
  },
  {
    icon: "✨",
    title: "Дресс-код",
    description: "Цветочная палитра — нежные пастельные оттенки розового и золотого.",
    time: "",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Детали праздника
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map((item, i) => (
            <motion.div
              key={i}
              className="bg-secondary rounded-2xl p-8 min-h-[260px] flex flex-col border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            >
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                <span className="text-5xl">{item.icon}</span>
                {item.time && (
                  <span
                    className="text-4xl text-primary"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
                  >
                    {item.time}
                  </span>
                )}
              </div>
              <div className="mt-4 text-center">
                <h3
                  className="text-xl text-foreground"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
