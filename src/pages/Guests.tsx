import { useEffect, useState } from "react"

const RSVP_URL = "https://functions.poehali.dev/d84c0119-3836-4865-b498-40569b3b3559"

interface Response {
  id: number
  name: string
  answer: "yes" | "no"
  created_at: string
}

const Guests = () => {
  const [responses, setResponses] = useState<Response[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(RSVP_URL)
      .then(r => r.json())
      .then(data => {
        setResponses(data.responses || [])
        setLoading(false)
      })
  }, [])

  const yes = responses.filter(r => r.answer === "yes")
  const no = responses.filter(r => r.answer === "no")

  return (
    <div
      className="min-h-screen px-6 py-16"
      style={{ background: "hsl(50 8% 9%)", fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="max-w-xl mx-auto">
        <h1
          className="text-5xl mb-2 text-center"
          style={{ fontFamily: "'Great Vibes', cursive", color: "hsl(38 38% 78%)" }}
        >
          Ответы гостей
        </h1>
        <p className="text-center mb-10" style={{ color: "hsl(40 15% 48%)", fontSize: "16px" }}>
          Всего ответов: {responses.length}
        </p>

        {loading && (
          <p className="text-center" style={{ color: "hsl(40 15% 48%)" }}>Загружаю...</p>
        )}

        {!loading && responses.length === 0 && (
          <p className="text-center" style={{ color: "hsl(40 15% 48%)", fontStyle: "italic" }}>
            Пока никто не ответил
          </p>
        )}

        {yes.length > 0 && (
          <div className="mb-8">
            <h2
              className="text-xl mb-4 flex items-center gap-2"
              style={{ color: "hsl(38 40% 68%)" }}
            >
              🥂 Придут — {yes.length}
            </h2>
            <div className="flex flex-col gap-2">
              {yes.map(r => (
                <div
                  key={r.id}
                  className="flex items-center justify-between px-5 py-3 rounded-xl"
                  style={{ background: "hsl(50 8% 13%)", border: "1px solid hsl(38 35% 25%)" }}
                >
                  <span style={{ color: "hsl(40 22% 78%)", fontSize: "18px" }}>{r.name}</span>
                  <span style={{ color: "hsl(40 15% 40%)", fontSize: "13px" }}>
                    {new Date(r.created_at).toLocaleDateString("ru-RU")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {no.length > 0 && (
          <div>
            <h2
              className="text-xl mb-4 flex items-center gap-2"
              style={{ color: "hsl(40 15% 52%)" }}
            >
              💌 Не смогут — {no.length}
            </h2>
            <div className="flex flex-col gap-2">
              {no.map(r => (
                <div
                  key={r.id}
                  className="flex items-center justify-between px-5 py-3 rounded-xl"
                  style={{ background: "hsl(50 8% 11%)", border: "1px solid hsl(40 15% 20%)" }}
                >
                  <span style={{ color: "hsl(40 18% 62%)", fontSize: "18px" }}>{r.name}</span>
                  <span style={{ color: "hsl(40 15% 38%)", fontSize: "13px" }}>
                    {new Date(r.created_at).toLocaleDateString("ru-RU")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Guests
