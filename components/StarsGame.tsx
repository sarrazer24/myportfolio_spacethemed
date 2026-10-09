"use client"

import { useState } from "react"
import type { CSSProperties } from "react"
import { Sparkles, Star, Trophy, X } from "lucide-react"

const stars = [
  [8, 0, 42, 7], [18, 42, 48, -5], [28, 86, 54, 9], [39, 130, 60, -8], [48, 174, 46, 5],
  [58, 218, 58, -7], [68, 262, 52, 10], [78, 306, 64, -6], [89, 350, 45, 8], [94, 34, 57, -10],
  [12, 78, 50, 6], [23, 122, 63, -9], [34, 166, 44, 8], [45, 210, 55, -5], [55, 254, 61, 10],
  [64, 298, 47, -7], [73, 342, 65, 6], [84, 26, 53, -8], [92, 70, 62, 9], [5, 114, 49, -6],
] as const

export default function StarsGame() {
  const [active, setActive] = useState(false)
  const [caught, setCaught] = useState<number[]>([])

  const startGame = () => {
    setCaught([])
    setActive(true)
  }

  const closeGame = () => {
    setActive(false)
    setCaught([])
  }

  const catchStar = (index: number) => {
    setCaught((current) => current.includes(index) ? current : [...current, index])
  }

  return (
    <>
      <button
        type="button"
        onClick={active ? closeGame : startGame}
        className={`fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur transition-transform hover:scale-105 ${
          active
            ? "border-red-400/50 bg-red-50/95 text-red-700 dark:bg-red-950/90 dark:text-red-300"
            : "border-cocoa-500/40 bg-white/90 text-cocoa-700 dark:bg-slate-900/90 dark:text-cocoa-300"
        }`}
        aria-label={active ? "End the star catching game" : "Start the star catching game"}
      >
        {active ? <X className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
        {active ? "End game" : "Start star game"}
      </button>

      {active && (
        <div className="fixed inset-0 z-[45] pointer-events-auto" aria-label="Star catching game">
          <div className="pointer-events-auto absolute left-1/2 top-5 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-cocoa-500/40 bg-white/90 px-4 py-2 text-xs font-semibold text-cocoa-700 shadow-lg backdrop-blur dark:bg-slate-900/90 dark:text-cocoa-300">
            <Trophy className="h-4 w-4" />
            Stars caught: {caught.length}/{stars.length}
            <button
              type="button"
              onClick={closeGame}
              aria-label="Close star catching game"
              className="rounded-full p-1 hover:bg-cocoa-500/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {stars.map(([size, angle, radius, drift], index) => {
            if (caught.includes(index)) return null

            return (
              <button
                key={index}
                type="button"
                aria-label={`Catch star ${index + 1}`}
                onClick={() => catchStar(index)}
                className="star-game-target absolute left-1/2 top-1/2 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-cocoa-500"
                style={{
                  "--star-size": `${Math.max(0.65, size / 10)}rem`,
                  "--orbit-angle": `${angle}deg`,
                  "--shot-distance": `${radius}vw`,
                  "--shot-drift": `${drift}vw`,
                  "--shot-duration": `${7 + (index % 5) * 0.8}s`,
                  animationDelay: `${index * -1.1}s`,
                } as CSSProperties}
              >
                <Star
                  className="pointer-events-none fill-current drop-shadow-[0_0_8px_currentColor]"
                  style={{ width: "var(--star-size)", height: "var(--star-size)" }}
                />
              </button>
            )
          })}
        </div>
      )}
    </>
  )
}
