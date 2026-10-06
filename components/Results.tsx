"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { RESULTS } from "@/lib/data";
import { ArrowIcon } from "./Icons";

/** Antes e depois. Desktop: trilho horizontal fixado com GSAP (Motion.tsx). Celular: deslizar + setas. */
export default function Results() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;
    const onScroll = () => {
      const max = sc.scrollWidth - sc.clientWidth;
      if (max > 0 && barRef.current) barRef.current.style.transform = `scaleX(${Math.max(0.1, sc.scrollLeft / max)})`;
    };
    sc.addEventListener("scroll", onScroll, { passive: true });
    return () => sc.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!zoom) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  const step = (dir: number) => {
    const card = railRef.current?.querySelector<HTMLElement>(".ba");
    if (card) scrollRef.current?.scrollBy({ left: dir * (card.offsetWidth + 14), behavior: "smooth" });
  };

  return (
    <section className="results" id="resultados">
      <div className="rail-wrap" id="railWrap">
        <div className="wrap">
          <div className="sec-head">
            <h2>Antes e depois</h2>
            <p>Pacientes atendidas pela Dra. Naara. Toque na foto para ampliar.</p>
          </div>
        </div>
        <div className="rail-scroll" ref={scrollRef}>
          <div className="rail" id="rail" ref={railRef}>
            {RESULTS.map((r, i) => (
              <button
                key={r.file}
                type="button"
                className={`ba ${r.layout}`}
                onClick={() => setZoom({ src: `/img/${r.file}.jpg`, alt: `Antes e depois: ${r.title}` })}
              >
                <span className="img">
                  <img src={`/img/${r.file}.jpg`} alt={`Antes e depois: ${r.title}`} loading="lazy" />
                  <span className="tag t1">Antes</span>
                  <span className="tag t2">Depois</span>
                </span>
                <span className="cap">{r.title}<i>{i + 1}/{RESULTS.length}</i></span>
              </button>
            ))}
          </div>
        </div>
        <div className="wrap">
          <div className="rail-bar"><i id="railBar" ref={barRef} /></div>
          <div className="rail-foot">
            <span>Resultados variam de pessoa para pessoa. Fotos do Instagram @dranaarapinheiro.</span>
            <div className="rail-nav">
              <button type="button" aria-label="Foto anterior" onClick={() => step(-1)}><ArrowIcon /></button>
              <button type="button" aria-label="Próxima foto" onClick={() => step(1)}><ArrowIcon /></button>
            </div>
          </div>
        </div>
      </div>

      {zoom && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Imagem ampliada" onClick={(e) => { if (e.target === e.currentTarget) setZoom(null); }}>
          <button type="button" ref={closeRef} aria-label="Fechar" onClick={() => setZoom(null)}>✕</button>
          <img src={zoom.src} alt={zoom.alt} />
        </div>
      )}
    </section>
  );
}
