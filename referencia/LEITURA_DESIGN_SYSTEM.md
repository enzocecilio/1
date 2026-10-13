# Leitura do design system: vídeo de referência (GERCOZZI)

Fonte: vídeo de 32,2 s, 1276×718 (16:9, horizontal), ~23,98 fps, com áudio.
O que está nesta pasta:
- `frames/`: 1 frame por segundo (32 frames)
- `cenas/`: um frame por corte detectado (34 frames), com os tempos em `cenas/tempos_de_corte.txt`
- `denso/`: trechos com mais frames (abertura, transição de 8 a 10 s, encerramento, entrada de palavra quadro a quadro)
- `sheet_01..04.png`: folhas de contato, 1 frame por segundo

## Paleta
| Papel | Hex estimado | Confiança |
|---|---|---|
| Fundo (imagem) | Filmagem 100% P&B (só 2,6% dos pixels têm alguma cor, todos no texto). Pretos fechados, brancos estourados em externas | Alta |
| Destaque, palavras-chave | Vermelho escuro, por volta de `#B20000` (faixa medida de `#A80000` a `#B80000`) | Alta para a cor, média para o hex exato por causa da compressão |
| Texto secundário, palavras de ligação | Creme ou marfim, por volta de `#ECE3C4` (faixa de `#E0D8C0` a `#F8E8C0`) | Média |
| Cartela final | Preto puro `#000000` com o logotipo em vermelho | Alta |

## Tipografia
- **Família:** grotesca neo-grotesca em bold, do tipo Helvetica Neue Bold, Neue Haas Grotesk Display ou Arial Bold (R de perna reta, Q com cauda curta). A mesma família vale para o vermelho, o creme e o logotipo. Confiança média para a classificação; a fonte exata não dá para determinar.
- **Peso:** um só, Bold. Confiança alta.
- **Caixa:** sempre alta, incluindo os acentos (Ê, Ã, Â, Ç) e a pontuação (`ESPERA,`, `SIMPLES?`). Confiança alta.
- **Tamanhos:** dois níveis bem separados.
  - Creme pequeno: altura de maiúscula por volta de 2,2 a 2,5% da altura do quadro.
  - Vermelho grande: de 6,5% (CONQUISTAR, linha longa) a ~14% (SUCESSO, palavra sozinha). A proporção fica entre 3:1 e 6:1. O vermelho parece escalar conforme o tamanho da palavra ou a ênfase. Confiança média.
- **Tracking:** negativo e apertado. As letras quase se tocam (CONQUISTAR, PIRÂMIDE). Confiança média-alta.
- **Entrelinha:** negativa, menor que 1. As linhas se sobrepõem: EMPRESA encosta em SUCESSO?, e a linha creme encosta no topo do vermelho de baixo. Fica em torno de 0,8 a 0,9 em relação ao corpo. Confiança média.
- **Efeitos:** sem contorno, caixa ou sombra visível. As bordas são levemente suaves, o que pode ser compressão ou blur ou glow mínimo. Confiança baixa sobre a existência de glow.

## Layout
- **Sem grid fixo e sem barras.** Cada frase forma um bloco tipográfico (lockup) posicionado livremente, de acordo com o enquadramento: centro, terço inferior, canto superior esquerdo, ou alinhado à direita (encerramento). Confiança alta.
- **Construção do bloco:** as palavras creme formam uma linha base, e a palavra-chave vermelha entra embaixo ou ao lado, encaixada. Palavras de ligação pequenas ("O", "DA", "DE", "AS", "A UM") ficam espremidas entre palavras vermelhas, no baseline ou junto do topo delas, como em "CONQUISTAR o TOPO da PIRÂMIDE". Confiança alta.
- **Espaçamento:** na primeira frase, as palavras creme ficam bem espaçadas (COMO … VOCÊ … ESPERA, … TER), quase na largura do vermelho que vem embaixo. Parece que a largura da palavra vermelha define a largura da linha. Confiança média.
- **Alinhamento:** varia. Há blocos justificados/centralizados (SUCESSO), à esquerda (SE VOCÊ NÃO CONSEGUE…) e à direita (pilha final RELAÇÃO / A / PESSOAS / QUE DÃO / TUDO / DE SI / TODOS / OS / DIAS?). Confiança alta.
- **Margens:** o texto chega perto da borda, mais ou menos 5 a 8% na lateral. Não há área de segurança rígida aparente. Confiança média.
- **Hierarquia:** vermelho grande = conceito (SUCESSO, VENCER, EMPRESA, PIRÂMIDE, SOCIEDADE, RESISTIR, DOCE?, PESSOAS, TUDO, TODOS, DIAS?). Creme pequeno = conectivos e o resto da frase. Não existe um terceiro nível. Confiança alta.
- **Composição com a pessoa:** o texto costuma ficar ao lado do rosto ou passar sobre o tronco, e não evita o sujeito. Confiança média.

## Elementos recorrentes
- **Logotipo:** "GERCOZZI" em caixa alta, na mesma grotesca bold, em vermelho, centralizado sobre preto, do segundo ~28,4 até o fim (~4 s). É pequeno, por volta de 10% da largura. Confiança alta.
- **Sem** barras, molduras, ícones, marcadores, legendas de nome ou padrões gráficos. Confiança alta.
- **Tratamento de imagem:** P&B com contraste alto, grão de filme, vinheta leve em alguns planos e brancos estourados. Algumas tomadas parecem ter zoom digital ou ser recortes ampliados, já que ficam bem desfocadas. Confiança média.
- **Exceção:** em ~17 s há um telão com "JOÃO ANDRÉ / AAA" no fundo. Faz parte da filmagem, não do sistema gráfico. Confiança média.

## Movimento (só o que dá para ver nos frames)
- **Texto:** é karaokê cinético. Cada palavra aparece quando é falada e fica parada no lugar. Comparando quadro a quadro, não vi escala, deslize nem fade; a palavra parece entrar em corte seco, de um quadro para o outro. Confiança média: um fade de 1 ou 2 quadros pode não aparecer nas amostras.
- **Acúmulo:** as palavras se somam até a frase ficar completa. Quando começa uma frase nova, o bloco antigo some ou é substituído (às vezes fica junto por um instante: "SE VOCÊ NÃO CONSEGUE" no topo enquanto o bloco "UM DIA… SUCESSO?" ainda está na tela). Confiança média-alta.
- **Saída do texto:** parece corte seco, sem animação visível. Confiança média-baixa.
- **Texto independente da imagem:** o bloco atravessa os cortes de filmagem sem mudar de lugar. Confiança alta.
- **Ritmo da filmagem:** cortes secos a cada ~0,7 a 1,2 s. Entre 8,8 e 9,5 s há uma rajada com um corte a cada 3 ou 4 quadros. Não vi dissolve nem transição com efeito. Confiança alta.
- **Câmera:** movimento real de câmera (handheld, seguindo a pessoa). Possível punch-in digital nos planos desfocados. Confiança baixa a média.
- **Fim:** corte seco para preto, com o logotipo já na tela. Confiança alta.
- **O que não dá para saber pelos frames:** curvas de easing, se existe motion blur no texto, e qualquer relação com batida musical. Esta última só dá para conferir com o áudio, que eu não analisei.
