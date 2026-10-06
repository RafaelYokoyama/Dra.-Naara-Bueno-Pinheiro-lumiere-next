"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { ADDRESS, DIRECTIONS_URL, GOOGLE_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_LABEL, waHref } from "@/lib/data";

function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      className="copy"
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1600);
        } catch {
          /* sem permissão de área de transferência: nada a fazer */
        }
      }}
    >
      {done ? "Copiado" : "Copiar"}
    </button>
  );
}

export default function Location() {
  return (
    <section className="sec alt" id="local">
      <div className="wrap">
        <div className="sec-head"><h2>Endereço e contato</h2></div>
        <div className="visit">
          <div className="up">
            <div className="rows">
              <div className="row"><small>Endereço</small><div>{ADDRESS}<CopyButton text={ADDRESS} /></div></div>
              <div className="row">
                <small>WhatsApp</small>
                <div>
                  <a href={waHref()} target="_blank" rel="noopener noreferrer">{WHATSAPP_LABEL}</a>
                  <CopyButton text={WHATSAPP_LABEL} />
                </div>
              </div>
              <div className="row"><small>Agendamento</small><div>Pelo WhatsApp ou pelo direct do Instagram</div></div>
              <div className="row"><small>Instagram</small><div><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE}</a></div></div>
            </div>
            <div className="ctas">
              <a className="btn" href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">Como chegar</a>
              <a className="btn ghost" href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">Ver no Google Maps</a>
            </div>
          </div>
          <div className="photos">
            <figure className="up">
              <div className="ph"><img className="par" src="/img/porta.jpg" alt="Porta da Lumière Esthétique, sala 208" loading="lazy" /></div>
              <figcaption>Sala 208, Torre 1</figcaption>
            </figure>
            <figure className="up">
              <div className="ph"><img className="par" src="/img/espaco.jpg" alt="Recepção da Lumière Esthétique" loading="lazy" /></div>
              <figcaption>Recepção da clínica</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
