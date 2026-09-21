import Image from "next/image";
import { products } from "@/data/site";

export default function Merchandise() {
  return <section className="section dark" id="shop"><div className="wrap">
    <div className="section-head reveal"><div><div className="eyebrow">Official Store</div><h2>Merchandise</h2></div><span className="link link-label">Teamwear collection</span></div>
    <div className="shop-grid">{products.map((product, index) => <article className={`product reveal${index % 3 ? ` delay-${index % 3}` : ""}`} key={product.name}>
      <div className="product-media"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 25vw" unoptimized /></div>
      <div className="product-copy"><div className="product-type">{product.type}</div><div className="product-name">{product.name}</div><div className="product-price">{product.price}</div></div>
    </article>)}</div>
  </div></section>;
}
