import Image from "next/image";
import { news } from "@/data/site";

export default function News() {
  return <section className="section dark" id="news"><div className="wrap">
    <div className="section-head reveal"><div><div className="eyebrow">Latest</div><h2>News</h2></div><span className="link link-label">Latest club stories</span></div>
    <div className="news-grid">{news.map((item, index) => <article className={`media-card${index ? " small" : ""} reveal${index ? ` delay-${index}` : ""}`} key={item.title}>
      <Image src={item.image} alt={item.alt} fill sizes={index ? "(max-width: 640px) 100vw, 33vw" : "(max-width: 900px) 100vw, 45vw"} unoptimized />
      <div className="media-copy"><div className="media-type">{item.type}</div><div className="media-title">{item.title}</div><div className="media-meta">{item.meta}</div></div>
    </article>)}</div>
  </div></section>;
}
