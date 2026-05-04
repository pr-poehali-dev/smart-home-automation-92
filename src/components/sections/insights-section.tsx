import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const weddingImage = "https://cdn.poehali.dev/projects/9c2010c8-b1d5-46ef-95a0-55b967bebd39/files/e53b9f69-bf98-4c11-b0cb-cee2788c2b44.jpg"

const timeline = [
  {
    title: "Первая встреча",
    category: "2020",
    image: weddingImage,
    description: "Судьба свела двух людей, чтобы написать самую красивую историю",
  },
  {
    title: "Первое путешествие вместе",
    category: "2022",
    image: weddingImage,
    description: "Мы открыли, что вдвоём любая дорога становится приключением",
  },
  {
    title: "Предложение руки и сердца",
    category: "2025",
    image: weddingImage,
    description: "Самый важный вопрос в жизни. Ответ был: «Да!»",
  },
  {
    title: "День, который изменит всё",
    category: "2026",
    image: weddingImage,
    description: "20 июня 2026 — день, когда двое станут одним целым",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Наша история
        </motion.p>

        <div className="divide-y divide-border">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="group flex items-center justify-between py-6 relative cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
            >
              <div className="flex-1">
                <span className="text-xs text-primary uppercase tracking-wider font-medium">{item.category}</span>
                <h3
                  className="text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 max-w-md">{item.description}</p>
              </div>
              <span className="text-2xl ml-4 opacity-0 group-hover:opacity-100 transition-opacity">🌹</span>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[280px] rounded-xl overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={timeline[hoveredIndex].image}
                alt={timeline[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
