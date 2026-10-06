"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Todas as animações GSAP do site, num só lugar (a ordem de criação importa para o pin).
 * Fica no fim da página, depois de todas as seções. Respeita "reduzir movimento".
 */
export default function Motion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      { motion: "(prefers-reduced-motion: no-preference)", desk: "(min-width: 901px)" },
      (ctx) => {
        const { motion, desk } = ctx.conditions as { motion: boolean; desk: boolean };
        if (!motion) return;

        // Abertura: nome sobe linha a linha, foto revela de baixo para cima
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(".hero h1 .ln>span", { yPercent: 110, duration: 1.3, stagger: 0.1 })
          .fromTo(
            "#heroPhoto",
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut", clearProps: "clipPath" },
            0
          )
          .from("#heroPhoto img", { scale: 1.2, duration: 2 }, 0)
          .from(".h-in", { y: 14, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.4);

        // Linha dourada de progresso no topo
        gsap.to("#progress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

        // Blocos entram suavemente
        gsap.utils.toArray<HTMLElement>(".up, .sec-head").forEach((el) =>
          gsap.from(el, { y: 18, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%" } })
        );

        // Parallax leve nas fotos do espaço
        gsap.utils.toArray<HTMLElement>(".par").forEach((img) =>
          gsap.fromTo(img, { yPercent: -5, scale: 1.1 }, { yPercent: 5, scale: 1.1, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true } })
        );

        if (!desk) return;

        // Tratamentos aparecem em sequência
        gsap.utils.toArray<HTMLElement>(".svc").forEach((s) =>
          gsap.from(s, { y: 14, opacity: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: s, start: "top 95%" } })
        );

        // Antes e depois: seção fixa enquanto o trilho corre na horizontal
        const rail = document.getElementById("rail");
        if (rail) {
          const dist = () => Math.max(0, rail.scrollWidth - window.innerWidth);
          gsap.to(rail, {
            x: () => -dist(),
            ease: "none",
            scrollTrigger: {
              trigger: "#railWrap",
              start: "top top",
              end: () => "+=" + dist(),
              pin: true,
              scrub: 0.6,
              invalidateOnRefresh: true,
              onUpdate: (s) => gsap.set("#railBar", { scaleX: Math.max(0.1, s.progress) }),
            },
          });
        }

        // Prévia de foto que segue o cursor na lista de tratamentos
        const pv = document.getElementById("preview");
        const pvi = document.getElementById("previewImg") as HTMLImageElement | null;
        if (pv && pvi && window.matchMedia("(hover:hover)").matches) {
          const xTo = gsap.quickTo(pv, "x", { duration: 0.55, ease: "power3" });
          const yTo = gsap.quickTo(pv, "y", { duration: 0.55, ease: "power3" });
          const onMove = (e: MouseEvent) => { xTo(e.clientX + 28); yTo(e.clientY - 150); };
          window.addEventListener("mousemove", onMove);
          const rows = gsap.utils.toArray<HTMLElement>(".svc");
          const enter = (e: Event) => {
            pvi.src = (e.currentTarget as HTMLElement).dataset.img || "";
            gsap.to(pv, { opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" });
          };
          const leave = () => gsap.to(pv, { opacity: 0, scale: 0.9, duration: 0.35 });
          rows.forEach((r) => { r.addEventListener("mouseenter", enter); r.addEventListener("mouseleave", leave); });
          return () => {
            window.removeEventListener("mousemove", onMove);
            rows.forEach((r) => { r.removeEventListener("mouseenter", enter); r.removeEventListener("mouseleave", leave); });
          };
        }
      }
    );

    // Recalcula posições quando imagens carregam ou uma categoria abre/fecha
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.addEventListener("toggle", refresh, true);
    return () => {
      window.removeEventListener("load", refresh);
      document.removeEventListener("toggle", refresh, true);
    };
  });

  return null;
}
