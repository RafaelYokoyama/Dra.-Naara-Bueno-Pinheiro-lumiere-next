/* eslint-disable @next/next/no-img-element */
import { REVIEWS, GOOGLE_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_LABEL } from "@/lib/data";
import WaButton from "./WaButton";

export function Facts() {
  return (
    <div className="facts">
      <div className="wrap">
        <ul>
          <li><b>5,0 ★</b><span>28 avaliações no Google</span></li>
          <li><b>+1000</b><span>vidas transformadas</span></li>
          <li><b>+7 anos</b><span>em estética injetável</span></li>
          <li><b>Euroville Mall</b><span>Torre 1, Sala 208</span></li>
        </ul>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="sec" id="sobre">
      <div className="wrap">
        <div className="sec-head"><h2>Sobre a Dra. Naara</h2></div>
        <div className="about">
          <div className="about-img up">
            <img src="/img/naara-clinica.jpg" alt="Dra. Naara Pinheiro na Lumière Esthétique" width={616} height={616} loading="lazy" />
          </div>
          <div className="about-copy">
            <blockquote className="up">
              “Tudo começou com um sonho: ajudar pessoas a se sentirem bem com quem são.”
              <footer>Dra. Naara Pinheiro</footer>
            </blockquote>
            <p className="up">
              Biomédica esteta, apaixonada pela área da estética injetável há mais de 7 anos. Hoje, transforma
              autoestima através da estética facial e corporal, com carinho e responsabilidade, na Lumière Esthétique.
            </p>
            <ul className="kv up">
              <li><b>Formação</b><span>Biomédica esteta</span></li>
              <li><b>Especialidade</b><span>Estética injetável e tratamentos de pele</span></li>
              <li><b>Protocolo próprio</b><span>Skin Protocolo Lumière, de limpeza de pele personalizada</span></li>
              <li><b>Atendimento</b><span>Euroville Mall, Bragança Paulista, com hora marcada</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="sec" id="avaliacoes">
      <div className="wrap">
        <div className="sec-head">
          <h2>Avaliações</h2>
          <a className="link" href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">Ver no Google</a>
        </div>
        <div className="rev-top up">
          <b>5,0</b>
          <span>
            <span className="stars">★★★★★</span>
            <br />
            Nota máxima em todas as 28 avaliações do Google
          </span>
        </div>
        <div className="reviews">
          {REVIEWS.map((r) => (
            <article className="rv up" key={r.name}>
              <span className="stars" aria-label="5 estrelas">★★★★★</span>
              <p>“{r.text}”</p>
              <footer><b>{r.name}</b> · Google</footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="sec final">
      <div className="wrap">
        <div>
          <h2>Agende sua avaliação</h2>
          <p>Atendimento com hora marcada, pelo WhatsApp {WHATSAPP_LABEL}.</p>
        </div>
        <WaButton>Agendar pelo WhatsApp</WaButton>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <span>Lumière Esthétique · Dra. Naara Bueno Pinheiro, biomédica esteta</span>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE}</a>
      </div>
    </footer>
  );
}

export function BookBar() {
  return (
    <div className="book-bar">
      <span className="info"><b>5,0 ★ Google</b>Euroville Mall</span>
      <WaButton>Agendar pelo WhatsApp</WaButton>
    </div>
  );
}
