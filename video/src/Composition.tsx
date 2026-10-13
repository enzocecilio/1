import { Video } from "@remotion/media";
import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Bloco } from "./Bloco";
import { Tratamento } from "./Tratamento";
import { carregarFonte } from "./tokens";

type Props = Record<string, unknown>;

const calculateMetadata: CalculateMetadataFunction<Props> = async () => {
  await carregarFonte();
  return {};
};

export const MyComposition = () => {
  return (
    <Composition
      id="Reuniao"
      component={Reuniao}
      durationInFrames={1844}
      fps={30}
      width={1080}
      height={1920}
      calculateMetadata={calculateMetadata}
    />
  );
};

// Margem lateral e área do texto: canto inferior esquerdo, sobre a parte escura (cadeira e chão)
const MARGEM = 76;
const TOPO_TEXTO = 1380;

export const Reuniao: React.FC<Props> = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  // Plano único na fonte: os "cortes secos" da referência viram punch-ins
  // sem easing, trocados junto com cada bloco de texto
  const t = frame / fps;
  const zoom = t >= 38.45 && t < 42 ? 1.18 : t >= 52.6 && t < 56 ? 1.1 : 1;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <AbsoluteFill
        style={{ scale: String(zoom), transformOrigin: "68% 38%" }}
      >
        <Video
          name="Plano original"
          src={staticFile("original.mp4")}
          premountFor={fps}
          objectFit="cover"
          style={{
            width: "100%",
            height: "100%",
            filter: "grayscale(1) contrast(1.35) brightness(0.92)",
          }}
        />
      </AbsoluteFill>
      <Tratamento />

      <Sequence
        name="Bloco 1: Pessoal, então, vamos juntos com o relatório"
        from={36.45 * fps}
        durationInFrames={(38.45 - 36.45) * fps}
        premountFor={fps}
      >
        <Bloco
          inicioMs={36450}
          style={{ left: MARGEM, top: TOPO_TEXTO }}
          linhas={[
            [{ texto: "Pessoal, então,", ms: 36450 }],
            [
              { texto: "vamos", ms: 37300 },
              { texto: "juntos", ms: 37450, grande: true },
            ],
            [{ texto: "com o", ms: 37700 }],
            [{ texto: "relatório", ms: 37900, grande: true }],
          ]}
        />
      </Sequence>

      <Sequence
        name="Bloco 2: e enviar esse leve puxão de orelha aí"
        from={38.45 * fps}
        durationInFrames={(42 - 38.45) * fps}
        premountFor={fps}
      >
        <Bloco
          inicioMs={38450}
          style={{ left: MARGEM, top: TOPO_TEXTO }}
          linhas={[
            [
              { texto: "e enviar", ms: 38450 },
              { texto: "esse", ms: 38680 },
              { texto: "leve", ms: 38990 },
            ],
            [
              { texto: "puxão", ms: 39480, grande: true, tamanho: 170 },
              { texto: "de", ms: 39900 },
            ],
            [
              { texto: "orelha", ms: 40040, grande: true, tamanho: 170 },
              { texto: "aí.", ms: 40380 },
            ],
          ]}
        />
      </Sequence>

      <Sequence
        name="Bloco 3: Boa, boa, fechou"
        from={52.6 * fps}
        durationInFrames={(56 - 52.6) * fps}
        premountFor={fps}
      >
        <Bloco
          inicioMs={52600}
          style={{ left: MARGEM, top: TOPO_TEXTO }}
          linhas={[
            [
              { texto: "Boa,", ms: 52700 },
              { texto: "boa,", ms: 53150 },
            ],
            [{ texto: "fechou.", ms: 53950, grande: true, tamanho: 200 }],
          ]}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
