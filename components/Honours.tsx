import Image from "next/image";
import { honours } from "@/data/site";

export default function Honours() {
  return <section className="section dark" id="honours"><div className="wrap honours">
    <div className="honours-top reveal"><div><div className="eyebrow">Club Honours</div><h3>Prestasi</h3></div><p>A dedicated record of achievement across the club, designed to give every competition, title count and winning season a clear place in Dewa United&apos;s story.</p></div>
    <div className="trophy-grid">{honours.map((honour, index) => <article className={`trophy-card reveal${index % 3 ? ` delay-${index % 3}` : ""}`} key={honour.title}>
      <div className="trophy-media"><Image src={honour.image} alt={honour.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 25vw" unoptimized /></div>
      <div className="trophy-copy"><div className="trophy-type">{honour.type}</div><div className="trophy-title">{honour.title}</div><div className="trophy-count"><strong>{honour.count}</strong><span>{honour.years}</span></div></div>
    </article>)}</div>
  </div></section>;
}
