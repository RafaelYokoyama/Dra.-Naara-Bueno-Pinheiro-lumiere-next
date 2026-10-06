import { GOOGLE_URL } from "@/lib/data";
import WaButton from "./WaButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <div className="hero-head">
            <span className="role h-in">Biomédica esteta · Bragança Paulista</span>
            <h1>
              <span className="ln"><span>Dra. Naara</span></span>
              <span className="ln"><span>Pinheiro</span></span>
            </h1>
            <span className="tagline h-in">Transformando autoestima.</span>
            <a className="rating h-in" href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">
              <span className="stars" aria-hidden="true">★★★★★</span>
              <b>5,0</b>
              <span className="c">28 avaliações no Google</span>
            </a>
          </div>
          <div className="hero-rest h-in">
            <p>
              Na Lumière Esthétique, cada tratamento começa com uma avaliação individualizada, na qual
              compreendemos suas queixas e seus objetivos.
            </p>
            <div className="ctas">
              <WaButton>Agendar consulta</WaButton>
              <a className="btn ghost" href="#tratamentos">Ver tratamentos</a>
            </div>
          </div>
        </div>
        <div className="hero-photo" id="heroPhoto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/naara-hero.jpg" alt="Dra. Naara Pinheiro, biomédica esteta" width={900} height={1154} fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}
