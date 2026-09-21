import Image from "next/image";
import { videos } from "@/data/site";

export default function Videos() {
  return <section className="section dark" id="videos"><div className="wrap">
    <div className="section-head reveal"><div><div className="eyebrow">Dewa United TV</div><h2>Latest Videos</h2></div><span className="link link-label">Featured videos</span></div>
    <div className="video-rail reveal delay-1">{videos.map((video) => <article className="video-card" key={video.title}>
      <Image src={video.image} alt={video.alt} fill sizes="(max-width: 640px) 86vw, 420px" unoptimized /><span className="play" aria-hidden="true" />
      <div className="video-copy"><div className="media-type">{video.type}</div><div className="video-title">{video.title}</div></div>
    </article>)}</div>
  </div></section>;
}
