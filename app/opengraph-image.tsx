import { ImageResponse } from "next/og";

export const alt = "Ayush Patil, Full Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c0a09",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle dot grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Amber accent bar, top left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 72,
            width: 48,
            height: 3,
            backgroundColor: "#f59e0b",
          }}
        />

        {/* Top: site wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "rgba(250,250,249,0.4)",
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          ayushpatil.in
        </div>

        {/* Center: main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#fafaf9",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Ayush Patil
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 26,
              color: "rgba(168,162,158,1)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Full Stack Engineer
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 8,
            }}
          >
            <div
              style={{
                width: 32,
                height: 1,
                backgroundColor: "#f59e0b",
              }}
            />
            <div
              style={{
                fontSize: 16,
                color: "rgba(120,113,108,1)",
                letterSpacing: "0.02em",
              }}
            >
              Backend · System Design · AI/ML
            </div>
          </div>
        </div>

        {/* Bottom: tech pills */}
        <div style={{ display: "flex", gap: 10 }}>
          {["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "6px 14px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(168,162,158,0.8)",
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
