"use client";

import { useEffect, useState } from "react";
import { CATEGORIES, waHref } from "@/lib/data";
import { ArrowIcon } from "./Icons";

/** Lista de tratamentos. Desktop: tudo aberto + prévia que segue o cursor (ver Motion.tsx). Celular: sanfona. */
export default function Treatments() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState<boolean[]>(CATEGORIES.map(() => true));

  useEffect(() => {
    const mq = window.matchMedia("(max-width:900px)");
    const apply = () => {
      setIsMobile(mq.matches);
      setOpen(CATEGORIES.map((_, i) => !mq.matches || i === 0));
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section className="sec alt" id="tratamentos">
      <div className="wrap">
        <div className="sec-head">
          <h2>Tratamentos</h2>
          <p>Toque em um tratamento para agendar pelo WhatsApp.</p>
        </div>
        <div className="cats">
          {CATEGORIES.map((cat, i) => (
            <details
              key={cat.title}
              className="cat"
              open={open[i]}
              onToggle={(e) => {
                const isOpen = (e.currentTarget as HTMLDetailsElement).open;
                setOpen((prev) => prev.map((v, j) => (j === i ? isOpen : v)));
              }}
            >
              <summary onClick={(e) => { if (!isMobile) e.preventDefault(); }}>
                {cat.title}
                <small>{cat.items.length} tratamentos</small>
              </summary>
              <ul>
                {cat.items.map((t) => (
                  <li key={t.name}>
                    <a
                      className="svc"
                      data-img={`/img/${t.img}.jpg`}
                      href={waHref(`Olá, Dra. Naara! Tenho interesse em ${t.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>{t.name}</strong>
                      <small>{t.desc}</small>
                      <span className="go" aria-hidden="true"><b>Agendar</b><ArrowIcon /></span>
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
      <div className="preview" id="preview" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" id="previewImg" src="/img/massagem.jpg" />
      </div>
    </section>
  );
}
