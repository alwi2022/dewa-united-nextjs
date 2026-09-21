import Image from "next/image";
import { fixtures } from "@/data/site";

function Club({ data }: { data: readonly [string, string, string] }) {
  return <div className="club"><Image className="club-logo" src={data[1]} alt={data[2]} width={68} height={68} unoptimized /><div className="club-name">{data[0]}</div></div>;
}

export default function Fixtures() {
  return <section className="section dark" id="fixtures"><div className="wrap">
    <div className="section-head reveal"><div><div className="eyebrow">Fixtures</div><h2>Next Matches</h2></div><p>One matchday view brings every Dewa United division together across competitions and venues.</p></div>
    <div className="fixture-rail reveal delay-1">{fixtures.map((fixture) => <article className="fixture-card" key={fixture.sport}>
      <div className="fixture-top"><span className="fixture-sport">{fixture.sport}</span><span>{fixture.competition}</span></div>
      <div className="fixture-match"><Club data={fixture.home} /><div className="match-time"><strong>{fixture.time}</strong><span>{fixture.date}</span></div><Club data={fixture.away} /></div>
      <div className="fixture-bottom"><small>{fixture.venue}</small><span className="link link-label">{fixture.action}</span></div>
    </article>)}</div>
  </div></section>;
}
