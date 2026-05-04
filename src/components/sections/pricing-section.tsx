import { motion } from "framer-motion"

const rsvpOptions = [
  {
    name: "Приду!",
    description: "С радостью разделю ваш праздник",
    features: [
      "Приду на церемонию",
      "Приду на банкет",
      "Танцую до утра",
      "Везу подарок с душой",
    ],
    emoji: "🥂",
    popular: true,
  },
  {
    name: "К сожалению, нет",
    description: "Буду с вами мысленно",
    features: [
      "Присылаю поздравления",
      "Желаю счастья и любви",
      "Жду следующей встречи",
      "Обниму при первой возможности",
    ],
    emoji: "💌",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-5xl text-foreground"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Вы придёте?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Ваш ответ поможет нам подготовить всё идеально. Пожалуйста, сообщите до 1 июня 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {rsvpOptions.map((option, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-2xl p-8 border ${
                option.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 0.98 }}
            >
              {option.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                  Будем рады!
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <span className="text-4xl">{option.emoji}</span>
                <h3
                  className="mt-3 text-2xl text-foreground"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {option.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">{option.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {option.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <span className="text-primary text-lg flex-shrink-0">✦</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 py-3 px-6 rounded-xl font-medium transition-all ${
                  option.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                    : "bg-secondary text-foreground hover:bg-accent/50 border border-border"
                }`}
              >
                {option.popular ? "Подтвердить участие" : "Сообщить об отсутствии"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
