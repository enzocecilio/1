import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Tokens lidos da referência (ver referencia/LEITURA_DESIGN_SYSTEM.md)
export const COR = {
  destaque: "#B20000",
  secundaria: "#ECE3C4",
  fundo: "#000000",
};

export const FONTE = "Arimo";

export const carregarFonte = () =>
  Promise.all([
    loadFont({
      family: FONTE,
      url: staticFile("fonts/arimo-latin-700-normal.woff2"),
      weight: "700",
    }),
    loadFont({
      family: FONTE,
      url: staticFile("fonts/arimo-latin-ext-700-normal.woff2"),
      weight: "700",
    }),
  ]);

// Tamanhos para 1080 px de largura: o creme fica por volta de 4% da largura,
// e o vermelho, entre 3x e 5x o creme
export const TAMANHO = {
  pequeno: 46,
  grande: 140,
};
