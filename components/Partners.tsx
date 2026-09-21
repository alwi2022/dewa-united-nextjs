import Image from "next/image";
import { partners } from "@/data/site";

export default function Partners() {
  return <section className="partners dark" aria-labelledby="partners-title"><div className="wrap">
    <div className="section-head reveal"><div><div className="eyebrow">Together with</div><h2 id="partners-title">Partners</h2></div><p>A flexible partner system prepared for official commercial tiers, campaign placements and sponsor visibility.</p></div>
    <div className="logo-wall reveal delay-1">{partners.map((partner) => <div className="logo-cell" key={partner.name}><Image src={partner.logo} alt={`${partner.name} logo`} width={110} height={46} unoptimized /></div>)}</div>
  </div></section>;
}
