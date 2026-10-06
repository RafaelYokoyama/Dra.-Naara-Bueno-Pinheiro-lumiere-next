# Lumière Esthétique · Dra. Naara Pinheiro

Site da clínica em Next.js 15 (App Router) + GSAP.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar

- **Vercel (recomendado):** suba a pasta para um repositório no GitHub e importe em vercel.com. Não precisa configurar nada.
- **Hospedagem estática (Hostinger, Netlify etc.):** em `next.config.mjs` adicione `output: "export"`, rode `npm run build` e envie a pasta `out/`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| WhatsApp, endereço, links, tratamentos, antes e depois, avaliações | `lib/data.ts` |
| Cores, fontes e layout | `app/globals.css` (tokens no topo) |
| Animações GSAP | `components/Motion.tsx` |
| Título e descrição para o Google | `app/layout.tsx` |
| Fotos | `public/img/` |

## Animações

- Abertura: nome sobe linha a linha e a foto se revela de baixo para cima.
- Linha dourada de progresso de leitura no topo.
- Blocos entram suavemente ao rolar e as fotos do espaço têm parallax leve.
- Desktop: antes e depois fixa a seção e corre na horizontal; prévia da foto segue o cursor nos tratamentos.
- Celular: abas no topo marcam a seção ativa, tratamentos em sanfona, antes e depois e avaliações deslizam com o dedo, botão de agendar fixo embaixo.
- Quem ativa "reduzir movimento" no aparelho vê o site sem animação.
