// Assets and editorial content sourced from the official Dewa United properties
// (dewaunited.com, api.dewaunited.com, and the club's apparel partner Juaraga).
// Fixture dates and times are dummy placeholders — everything else is real.
const CDN = "https://api.dewaunited.com/storage/images/uploads";
const LOGO = "https://dewaunited.com/footer/logo";
const SHOP = "https://cdn.shopify.com/s/files/1/0595/4270/0185/files";

export const navigation = [
  ["Fixtures", "#fixtures"], ["News", "#news"], ["Videos", "#videos"],
  ["Teams", "#teams"], ["Prestasi", "#honours"], ["Shop", "#shop"],
] as const;

export const hero = {
  image: `${CDN}/du_image_20260916233756027320_du_image_PHOTO-2026-09-16-20-50-35.webp`,
  alt: "Dewa United Banten FC players celebrating together on the pitch",
  // Titik fokus foto -> object-position. Setel ini setiap kali hero image diganti,
  // supaya subjek foto duduk di atas pita teks. Tidak perlu menyentuh CSS.
  focal: "center 38%",
} as const;

export const fixtures = [
  { sport: "Football", competition: "BRI Super League", time: "19:00", date: "27 Sep", venue: "Banten International Stadium", action: "Match Centre", home: ["Dewa United", `${CDN}/du_image_20210614101229972238_du_image_du-logo-football.webp`, "Dewa United Banten FC crest"], away: ["Borneo FC", `${CDN}/du_image_20220614102439269396_du_image_borneo.webp`, "Borneo FC crest"] },
  { sport: "Basketball", competition: "IBL 2026", time: "18:30", date: "04 Oct", venue: "Dewa United Arena", action: "Game Centre", home: ["Dewa United", `${CDN}/du_image_20221227093124365667_du_image_Logo-DewaUnited-Color-_2_.webp`, "Dewa United Banten basketball logo"], away: ["Satya Wacana", `${CDN}/du_image_20220112133144640062_du_image_saints-salatiga.webp`, "Satya Wacana Salatiga logo"] },
  { sport: "Esports · MLBB", competition: "MPL ID Season 18", time: "16:00", date: "28 Sep", venue: "MPL ID Studio · Jakarta", action: "Match Centre", home: ["Dewa United", `${CDN}/du_image_20210614101226538122_du_image_du-logo-esports.webp`, "Dewa United Esports logo"], away: ["Alter Ego", `${CDN}/du_image_20210615130401600100_du_image_alterego.webp`, "Alter Ego esports logo"] },
] as const;

export const news = [
  { type: "Football · First Team", title: "Dewa United Banten FC Tatap PSS Sleman dengan Keyakinan dan Target Tiga Poin", meta: "19 September 2026", image: `${CDN}/du_image_20260919233653713980_du_image_IMG_2815%202.webp`, alt: "Dewa United Banten FC squad training session" },
  { type: "Esports · MLBB", title: "Adaptasi Patch Baru, QINN Raih Dua Gelar Player of The Match", meta: "21 September 2026", image: `${CDN}/du_image_20260921105157073045_du_image_QINN-MPL-ID-S18-Week-6.webp`, alt: "QINN of Dewa United Esports at MPL ID Season 18" },
  { type: "Basketball", title: "Pandu Wiguna Officially #AnakDewa", meta: "21 Agustus 2026", image: `${CDN}/du_image_20260822000504402800_du_image_1000767638.webp`, alt: "Pandu Wiguna signing for Dewa United Banten" },
] as const;

export const videos = [
  { type: "Football · Match Highlights", title: "MATCH HIGHLIGHTS | Borneo FC vs Dewa United Banten FC | 1-3 | BRI Super League", image: "https://i.ytimg.com/vi/vsE-UoUXr5U/maxresdefault.jpg", alt: "Match highlights thumbnail" },
  { type: "Football · Behind The Match", title: "Fight To The Very End! | Behind The Match Borneo FC Samarinda vs DUBFC", image: "https://i.ytimg.com/vi/j-ZDQBgjBdY/maxresdefault.jpg", alt: "Behind the match thumbnail" },
  { type: "Football · Daily Access", title: "Chasing Our First Win At Home! | Daily Access", image: "https://i.ytimg.com/vi/WMS_5TAyjWU/maxresdefault.jpg", alt: "Daily access thumbnail" },
] as const;

export const teams = [
  { index: "01 · FOOTBALL", title: ["Dewa United", "Banten FC"], text: "BRI Super League squad, fixtures and first-team stories.", image: `${CDN}/du_image_20260919233652257971_du_image_IMG_2810.webp`, alt: "Dewa United Banten FC player" },
  { index: "02 · BASKETBALL", title: ["Dewa United", "Banten"], text: "IBL roster, schedule and nights at Dewa United Arena.", image: `${CDN}/du_image_20260203140110924016_du_image_20260102-24.webp`, alt: "Dewa United Banten basketball players at Home of Anak Dewa" },
  { index: "03 · ESPORTS", title: ["Dewa United", "Esports"], text: "MLBB roster, MPL ID schedules, players and content.", image: `${CDN}/du_image_20260920172132156749_du_image_dewa-united-vs-ae-mpl-id-s18.webp`, alt: "Dewa United Esports at MPL ID Season 18" },
] as const;

export const honours = [
  { type: "Football", title: "Piala Presiden", count: "3rd", years: "Season 2025", image: `${CDN}/du_image_20250623113742934050_du_image_Logo_piala_presiden-removebg-preview.webp`, alt: "Piala Presiden logo" },
  { type: "Football", title: "Liga 1 Indonesia", count: "2nd", years: "Season 2024/2025", image: `${CDN}/du_image_20220715104931331480_du_image_BRI-Liga-1-Indonesia.webp`, alt: "Liga 1 Indonesia logo" },
  { type: "Football", title: "Liga 2 Indonesia", count: "3rd", years: "Promoted · Season 2021", image: `${CDN}/du_image_20210812103016043843_du_image_liga-2.webp`, alt: "Liga 2 Indonesia logo" },
] as const;

export const products = [
  { type: "Basketball · Match Kit", name: "Jersey Basket Match Home 2024", price: "Rp 499.900", image: `${SHOP}/BLACK1.png?v=1704791438&width=700`, alt: "Dewa United black home basketball jersey" },
  { type: "Basketball · Match Kit", name: "Jersey Match Alternate 2024", price: "Rp 499.900", image: `${SHOP}/f6f41de8-d969-4b03-b851-2c656ec01c63.jpg?v=1712133149&width=700`, alt: "Dewa United gold alternate jersey" },
  { type: "Apparel", name: "Basketball Polo Shirt 2024", price: "Rp 349.900", image: `${SHOP}/73c72018-8034-43c1-80dd-8e594692f129.jpg?v=1766052168&width=700`, alt: "Dewa United black basketball polo shirt" },
  { type: "Headwear", name: "Basketball Snapback 2024", price: "Rp 179.900", image: `${SHOP}/Artboard_1_a2448a67-ce39-4e80-99bd-37fb7fd23e15.png?v=1729136964&width=700`, alt: "Dewa United black snapback cap" },
] as const;

export const partners = [
  { name: "BAIC", logo: `${LOGO}/BAIC.png` },
  { name: "JHL Solitaire", logo: `${LOGO}/JHL-Solitare-gold.png` },
  { name: "Carstensz", logo: `${LOGO}/carstensz_white.png` },
  { name: "CBN Fiber", logo: `${LOGO}/cbn-fiber-white.png` },
  { name: "Juaraga", logo: `${LOGO}/juaraga_white.png` },
  { name: "Yamisok", logo: `${LOGO}/yamisok_white.png` },
  { name: "Bolaskor", logo: `${LOGO}/bolaskor_new.png` },
  { name: "RSPB", logo: `${LOGO}/rspb_new.png` },
  { name: "Crystalin", logo: `${LOGO}/crystalin.png` },
  { name: "Nusapay", logo: `${LOGO}/nusapay_thumb_.webp` },
  { name: "Gudang Kripto", logo: `${LOGO}/gudangkripto_thumb_.webp` },
  { name: "Kami Bijak", logo: `${LOGO}/kamibijak_thumb_.webp` },
] as const;
