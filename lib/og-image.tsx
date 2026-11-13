import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"

type OgImageOptions = {
  eyebrow: string
  title: string
  description: string
  tags: string[]
}

export async function createOgImage({ eyebrow, title, description, tags }: OgImageOptions) {
  const fontDirectory = path.join(process.cwd(), "assets", "fonts")
  const [exo2Regular, exo2Bold, orbitronBold] = await Promise.all([
    readFile(path.join(fontDirectory, "exo2-400.ttf")),
    readFile(path.join(fontDirectory, "exo2-700.ttf")),
    readFile(path.join(fontDirectory, "orbitron-700.ttf")),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 72px 38px",
          position: "relative",
          overflow: "hidden",
          color: "#1f2937",
          background: "linear-gradient(125deg, #fbf5f1 0%, #f8efeb 58%, #f3e5e3 100%)",
          fontFamily: "Exo 2",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -85,
            top: 105,
            width: 410,
            height: 410,
            borderRadius: 999,
            border: "1px solid rgba(185, 104, 120, 0.13)",
            background: "rgba(216, 165, 174, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 12,
            top: 235,
            width: 220,
            height: 220,
            borderRadius: 999,
            border: "1px solid rgba(185, 104, 120, 0.13)",
          }}
        />
        <div style={{ position: "absolute", left: 1035, top: 120, width: 8, height: 8, borderRadius: 8, background: "#b96878" }} />
        <div style={{ position: "absolute", left: 1085, top: 516, width: 5, height: 5, borderRadius: 5, background: "#d8a5ae" }} />
        <div style={{ position: "absolute", left: 46, top: 435, width: 6, height: 6, borderRadius: 6, background: "#c77f8b" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div style={{ color: "#8f4f5d", fontSize: 24, fontWeight: 700, letterSpacing: "-0.5px" }}>
            sarraverse
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(143, 79, 93, 0.28)",
              borderRadius: 999,
              padding: "9px 16px",
              color: "#8f4f5d",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "1.5px",
            }}
          >
            AI &amp; DATA SCIENCE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              marginBottom: 17,
              color: "#8f4f5d",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              color: "#20212b",
              fontFamily: "Orbitron",
              fontSize: title.length > 36 ? 43 : 56,
              fontWeight: 700,
              letterSpacing: "-1.5px",
              lineHeight: 1.2,
              maxWidth: 1050,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              color: "#4b5563",
              fontSize: 21,
              lineHeight: 1.45,
              maxWidth: 880,
            }}
          >
            {description}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 25 }}>
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  border: "1px solid rgba(143, 79, 93, 0.24)",
                  borderRadius: 999,
                  padding: "8px 14px",
                  color: "#8f4f5d",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(143, 79, 93, 0.2)",
            paddingTop: 17,
            color: "#8f4f5d",
            fontSize: 14,
            letterSpacing: "0.5px",
            zIndex: 1,
          }}
        >
          <div>Khayra Sarra Zerguerras</div>
          <div>sarra-zerguerras-portfolio.vercel.app</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Exo 2", data: exo2Regular, weight: 400, style: "normal" },
        { name: "Exo 2", data: exo2Bold, weight: 700, style: "normal" },
        { name: "Orbitron", data: orbitronBold, weight: 700, style: "normal" },
      ],
    },
  )
}
