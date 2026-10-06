// Todo o conteúdo do site vem do Instagram @dranaarapinheiro e do perfil da clínica no Google.

export const WHATSAPP = "5511995774490";
export const WHATSAPP_LABEL = "(11) 99577-4490";
export const INSTAGRAM_URL = "https://www.instagram.com/dranaarapinheiro/";
export const INSTAGRAM_HANDLE = "@dranaarapinheiro";
export const GOOGLE_URL = "https://maps.google.com/?cid=8461775947943741413";
export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-22.9761835,-46.5456783";
export const ADDRESS =
  "Euroville Mall, Praça Maastricht, 200, Torre 1, Sala 208, Jardim São José, Bragança Paulista, SP, 12917-021";

export const DEFAULT_MSG =
  "Olá, Dra. Naara! Vim pelo site e gostaria de agendar uma consulta.";

export function waHref(msg: string = DEFAULT_MSG) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export const NAV = [
  { id: "sobre", label: "Sobre" },
  { id: "tratamentos", label: "Tratamentos" },
  { id: "resultados", label: "Antes e depois" },
  { id: "avaliacoes", label: "Avaliações" },
  { id: "local", label: "Endereço" },
] as const;

export type Treatment = { name: string; desc: string; img: string };

export const CATEGORIES: { title: string; items: Treatment[] }[] = [
  {
    title: "Injetáveis",
    items: [
      { name: "Aplicação de Botox", desc: "Suaviza linhas de expressão", img: "botox-prep" },
      { name: "Botox preventivo", desc: "Previne rugas antes que fiquem marcadas", img: "botox-prep" },
      { name: "Efeito Nefertiti", desc: "Define mandíbula e pescoço, sem cirurgia", img: "botox-prep" },
      { name: "Preenchedores", desc: "Volume e contorno", img: "botox-prep" },
      { name: "Preenchimento labial", desc: "Desenho, contorno e volume", img: "ba-labios4" },
      { name: "Harmonização facial", desc: "Realce natural, sem exageros", img: "naara-clinica" },
      { name: "Bioestimuladores de colágeno", desc: "Firmeza e sustentação (Sculptra)", img: "sculptra" },
    ],
  },
  {
    title: "Pele",
    items: [
      { name: "Skin Protocolo Lumière", desc: "Limpeza de pele personalizada", img: "massagem" },
      { name: "Limpeza de pele", desc: "Remove cravos, oleosidade e impurezas", img: "massagem" },
      { name: "Peelings", desc: "Inclui Peeling Herbal", img: "massagem" },
      { name: "Dermaplaning", desc: "Pele mais lisa e uniforme", img: "massagem" },
      { name: "Microagulhamento", desc: "Estímulo de colágeno", img: "microagulhamento" },
      { name: "Marcas de acne", desc: "Marcas, cicatrizes e manchas", img: "ba-acne" },
      { name: "Plástica Biofotônica", desc: "Fotobiomodulação com luz", img: "led" },
    ],
  },
  {
    title: "Bem-estar",
    items: [
      { name: "Massoterapia", desc: "Alívio de tensões", img: "massagem" },
      { name: "Massagem para gestantes", desc: "Alivia dores e inchaço", img: "massagem" },
    ],
  },
];

// "side": antes à esquerda, depois à direita. "stack": antes em cima, depois embaixo.
export const RESULTS: { file: string; layout: "side" | "stack"; title: string }[] = [
  { file: "ba-limpeza1", layout: "side", title: "Limpeza de pele" },
  { file: "ba-botox1", layout: "stack", title: "Toxina botulínica" },
  { file: "ba-labios1", layout: "stack", title: "Preenchimento labial" },
  { file: "ba-acne", layout: "side", title: "Tratamento de acne" },
  { file: "ba-face", layout: "side", title: "Toxina botulínica" },
  { file: "ba-labios2", layout: "side", title: "Preenchimento labial" },
  { file: "ba-limpeza2", layout: "stack", title: "Limpeza de pele" },
  { file: "ba-botox2", layout: "stack", title: "Toxina botulínica" },
  { file: "ba-labios4", layout: "side", title: "Preenchimento labial" },
  { file: "ba-labios3", layout: "side", title: "Preenchimento labial" },
];

// Avaliações reais do Google (texto original das pacientes).
export const REVIEWS = [
  { name: "Renata Pinheiro", text: "Primeiramente fiz uma limpeza de pele com a dra. Naara, e adorei, pois foi o melhor procedimento que já fiz em Bragança!! E depois fiz o botox!! Ficou perfeito com uma suavidade incrível!!" },
  { name: "Leticia Zini", text: "Excelente atendimento! Profissional muito atenciosa e competente. O ambiente é impecável e aconchegante. Recomendo muito." },
  { name: "Odila Piniano Pinheiro", text: "Excelente profissional, muito atenciosa, preocupada com o bem estar dos pacientes. Os resultados dos procedimentos são perfeitos." },
  { name: "Camila Capodeferro", text: "Excelente profissional!! Sempre nos atende com muito carinho e cuidado e os resultados são impecáveis! Confio de olhos fechados!" },
  { name: "Larissa Brito", text: "Excelente profissional!! Já fiz vários procedimentos com a Dra Naara e cada vez me surpreendo mais com os resultados." },
  { name: "Thalyta Gerodo", text: "Profissional super competente, tirou todas as minhas dúvidas, e me tratou com muito carinho. Super indico o trabalho da Naara!" },
];
