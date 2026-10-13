import type React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { COR, FONTE, TAMANHO } from "./tokens";

// Uma palavra do bloco. Ela aparece em corte seco no instante `ms`
// (tempo absoluto no vídeo, em milissegundos) e fica até o bloco sair.
export type Palavra = {
  texto: string;
  ms: number;
  grande?: boolean;
  tamanho?: number;
};

export type Linha = Palavra[];

type Props = {
  readonly inicioMs: number;
  readonly linhas: Linha[];
  readonly style?: React.CSSProperties;
};

export const Bloco: React.FC<Props> = ({ inicioMs, linhas, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const agoraMs = inicioMs + (frame / fps) * 1000;

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontFamily: FONTE,
        fontWeight: 700,
        textTransform: "uppercase",
        ...style,
      }}
    >
      {linhas.map((linha, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            // Entrelinha negativa: as linhas se encostam, como na referência
            marginTop: i === 0 ? 0 : linha.some((p) => p.grande) ? -22 : -6,
          }}
        >
          {linha.map((p, j) => {
            const tamanho =
              p.tamanho ?? (p.grande ? TAMANHO.grande : TAMANHO.pequeno);
            return (
              <span
                key={j}
                style={{
                  fontSize: tamanho,
                  lineHeight: p.grande ? 0.86 : 1,
                  letterSpacing: p.grande ? "-0.045em" : "-0.02em",
                  color: p.grande ? COR.destaque : COR.secundaria,
                  // Ocupa o espaço desde o início para o bloco não pular
                  visibility: agoraMs >= p.ms ? "visible" : "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {p.texto}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};
