import Image from "next/image";
import { teams } from "@/data/site";

export default function Teams() {
  return <section className="section dark" id="teams"><div className="wrap">
    <div className="section-head reveal"><div><div className="eyebrow">One badge · three worlds</div><h2>Our Teams</h2></div><p>One visual system brings football, basketball and esports together as a single institution.</p></div>
    <div className="worlds">{teams.map((team, index) => <article className={`world reveal${index ? ` delay-${index}` : ""}`} key={team.index}>
      <Image src={team.image} alt={team.alt} fill sizes="(max-width: 900px) 100vw, 33vw" unoptimized />
      <div className="world-copy"><div className="world-index">{team.index}</div><h3>{team.title[0]}<br />{team.title[1]}</h3><p>{team.text}</p></div>
    </article>)}</div>
  </div></section>;
}
