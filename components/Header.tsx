"use client";

import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/data";
import WaButton from "./WaButton";

/** Cabeçalho com nav em cápsula (desktop) / abas roláveis (celular) que marca a seção ativa. */
export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const pillRef = useRef<HTMLElement>(null);
  const indRef = useRef<HTMLSpanElement>(null);

  // Scrollspy: a seção que cruza 35% da altura da tela fica ativa.
  useEffect(() => {
    const spy = () => {
      const line = window.innerHeight * 0.35;
      let found: string | null = null;
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) found = id;
      }
      setActive(found);
    };
    spy();
    window.addEventListener("scroll", spy, { passive: true });
    window.addEventListener("resize", spy);
    return () => {
      window.removeEventListener("scroll", spy);
      window.removeEventListener("resize", spy);
    };
  }, []);

  // Move o indicador (desktop) ou rola as abas (celular) até o item ativo.
  useEffect(() => {
    const pill = pillRef.current;
    const ind = indRef.current;
    if (!pill || !ind) return;
    const link = pill.querySelector<HTMLAnchorElement>(`a[data-sec="${active}"]`);
    if (!link) {
      ind.style.opacity = "0";
      return;
    }
    if (window.matchMedia("(max-width:900px)").matches) {
      pill.scrollTo({ left: link.offsetLeft - 16, behavior: "smooth" });
    } else {
      ind.style.opacity = "1";
      ind.style.width = `${link.offsetWidth}px`;
      ind.style.transform = `translateX(${link.offsetLeft}px)`;
    }
  }, [active]);

  return (
    <header className="top" id="top">
      <div className="wrap">
        <div className="bar">
          <a className="logo" href="#inicio" aria-label="Lumière Esthétique, início">
            <b>lumière</b>
            <i>esthétique</i>
          </a>
          <nav className="pill" ref={pillRef} aria-label="Seções">
            <span className="ind" ref={indRef} aria-hidden="true" />
            {NAV.map(({ id, label }) => (
              <a key={id} href={`#${id}`} data-sec={id} className={active === id ? "active" : undefined}>
                {label}
              </a>
            ))}
          </nav>
          <WaButton>Agendar consulta</WaButton>
        </div>
      </div>
      <span className="progress" id="progress" aria-hidden="true" />
    </header>
  );
}
