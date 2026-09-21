import Image from "next/image";
import { hero } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media"><Image src={hero.image} alt={hero.alt} fill priority sizes="100vw" unoptimized style={{ objectPosition: hero.focal }} /></div>
      <div className="wrap hero-content reveal">
        <div className="eyebrow">Football · Basketball · Esports</div>
        <h1><span>One club.</span><span>Every arena.</span></h1>
        <div className="hero-bottom">
          <p>Kick-off times, squad news, highlights and kit drops. One home for Anak Dewa across all three arenas.</p>
          <div className="hero-actions"><a className="btn primary" href="#fixtures">Next Matches</a><a className="btn" href="#teams">Explore Teams</a></div>
        </div>
      </div>
    </section>
  );
}
