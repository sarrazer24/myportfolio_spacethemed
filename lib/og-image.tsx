import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"

type OgImageOptions = {
  eyebrow: string
  title: string
  description: string
}

export async function createOgImage({ eyebrow, title, description }: OgImageOptions) {
  const portraitBytes = await readFile(path.join(process.cwd(), "public", "selfie.jpg"))
  const portrait = `data:image/jpeg;base64,${portraitBytes.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 64px 38px",
          position: "relative",
          overflow: "hidden",
          color: "#1f2937",
          background: "linear-gradient(125deg, #fbf5f1 0%, #f8efeb 58%, #f3e5e3 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: 125,
            width: 390,
            height: 390,
            borderRadius: 999,
            border: "1px solid rgba(185, 104, 120, 0.12)",
            background: "rgba(216, 165, 174, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 38,
            top: 248,
            width: 220,
            height: 220,
            borderRadius: 999,
            border: "1px solid rgba(185, 104, 120, 0.12)",
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
              fontWeight: 600,
              letterSpacing: "1.5px",
            }}
          >
            AI &amp; DATA SCIENCE
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 38, zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              width: 190,
              height: 190,
              minWidth: 190,
              borderRadius: 999,
              padding: 7,
              background: "linear-gradient(145deg, #b96878, #d8a5ae)",
              boxShadow: "0 16px 36px rgba(143, 79, 93, 0.2)",
            }}
          >
            <img
              src={portrait}
              alt=""
              width={176}
              height={176}
              style={{ width: 176, height: 176, borderRadius: 999, objectFit: "cover" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                marginBottom: 15,
                color: "#8f4f5d",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "2.1px",
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                color: "#20212b",
                fontSize: title.length > 36 ? 43 : 54,
                fontWeight: 700,
                letterSpacing: "-2px",
                lineHeight: 1.15,
                maxWidth: 840,
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 16,
                color: "#4b5563",
                fontSize: 19,
                lineHeight: 1.45,
                maxWidth: 810,
              }}
            >
              {description}
            </div>
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
            fontSize: 13,
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
    },
  )
}
