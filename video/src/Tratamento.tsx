import type React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

// Grão de filme (muda a cada quadro) e vinheta leve, sobre a imagem P&B
export const Tratamento: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <AbsoluteFill style={{ mixBlendMode: "overlay", opacity: 0.22 }}>
        <svg width="100%" height="100%">
          <filter id="grao">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves={2}
              seed={frame % 97}
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grao)" />
        </svg>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </>
  );
};
