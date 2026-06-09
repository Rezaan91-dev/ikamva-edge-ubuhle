import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Package, Headphones, Star, Crown, Gift, Truck, BadgeCheck, ShoppingBag } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FEATURED_CATEGORIES } from "@/lib/categories";
import hero from "@/assets/hero-woman.jpg";
import comboCover from "@/assets/combo-cover.png.asset.json";
import comboShampoo from "@/assets/combo-shampoo.jpg.asset.json";
import comboHerbal from "@/assets/combo-herbal.jpg.asset.json";
import comboNeutralising from "@/assets/combo-neutralising.png.asset.json";
import comboKarseell from "@/assets/combo-karseell.jpg.asset.json";
import comboBotox from "@/assets/combo-botox.jpg.asset.json";
import comboAfripure from "@/assets/combo-afripure.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ikamva Edge Ubuhle — Elevating Beauty, Empowering Confidence" },
      { name: "description", content: "Shop premium beauty, haircare, skincare, wellness and everyday essentials from nearly 200 trusted brands across South Africa." },
      { property: "og:title", content: "Ikamva Edge Ubuhle — Beauty & Self-Care" },
      { property: "og:description", content: "South Africa's destination for beauty and confidence." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Marquee />
      <Categories />
      <WhyShop />
      <ComboOptions />
      <Testimonials />
      <Newsletter />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,oklch(0.85_0.1_40/0.5),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-10 items-center relative">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs tracking-wider uppercase mb-6 backdrop-blur">
            <Sparkles className="size-3.5 text-rose-gold-light" /> Proudly South African Beauty
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            <span className="block text-gradient-rose font-script text-5xl md:text-6xl">Elevating Beauty,</span>
            <span className="block mt-1">Empowering <em className="not-italic text-rose-gold-light">Confidence.</em></span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
            Discover premium haircare, skincare, makeup, wellness and everyday
            essentials from nearly 200 trusted brands — delivered across South Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-rose-gold text-plum-deep font-semibold shadow-glow hover:bg-rose-gold-light transition-all">
              Shop Now
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/brands" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors font-medium">
              Explore Brands
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2"><Crown className="size-4 text-rose-gold-light" /> ~200 trusted brands</span>
            <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-rose-gold-light" /> 100% authentic</span>
            <span className="flex items-center gap-2"><Package className="size-4 text-rose-gold-light" /> Nationwide delivery</span>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-6 bg-gradient-rose rounded-full blur-3xl opacity-30" />
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden ring-1 ring-rose-gold/40 shadow-glow">
              <img src={hero} alt="Confident African woman wearing a regal headwrap" className="h-full w-full object-cover" width={1080} height={1600} />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-left-10 bg-card text-foreground rounded-2xl shadow-soft p-4 flex items-center gap-3 max-w-[14rem]">
              <div className="size-10 rounded-full bg-gradient-rose flex items-center justify-center text-white">
                <Star className="size-5 fill-current" />
              </div>
              <div>
                <div className="font-semibold text-sm">4.9 / 5</div>
                <div className="text-xs text-muted-foreground">From 2,800+ happy customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Nivea", "Revlon", "Organic Root Stimulator", "Native Child", "Yardley London", "Schwarzkopf GLISS", "Vaseline", "Sleek Makeup", "Wahl", "Pond's", "USN"];
  return (
    <div className="border-y border-border/60 bg-blush/40 overflow-hidden">
      <div className="flex gap-12 py-5 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
        {[...items, ...items, ...items].map((b, i) => (
          <span key={i} className="font-display text-xl md:text-2xl text-plum/70 tracking-wide">{b}</span>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="flex items-end justify-between gap-4 mb-10">
        <div>
          <p className="font-script text-2xl text-rose-gold mb-1">Curated for you</p>
          <h2 className="text-3xl md:text-5xl font-display text-plum-deep">Shop by Category</h2>
        </div>
        <Link to="/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-plum hover:text-rose-gold">
          View all <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {FEATURED_CATEGORIES.map((c, i) => (
          <Link
            key={c.name}
            to="/shop"
            className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
          >
            <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/85 via-plum-deep/20 to-transparent" />
            <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end text-primary-foreground">
              <span className="text-[10px] tracking-[0.25em] uppercase text-rose-gold-light mb-1">{c.tag}</span>
              <h3 className="font-display text-xl md:text-3xl">{c.name}</h3>
              <p className="text-sm text-white/80 mt-1 hidden md:block">{c.blurb}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-rose-gold-light opacity-0 group-hover:opacity-100 transition-opacity">
                Shop now <ArrowRight className="size-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function WhyShop() {
  const items = [
    { icon: ShieldCheck, title: "Authentic Products", desc: "100% genuine products sourced directly from trusted suppliers." },
    { icon: Crown, title: "Nearly 200 Brands", desc: "An extensive directory of the brands South Africans love." },
    { icon: Package, title: "Convenient Shopping", desc: "Easy online ordering, delivered anywhere in South Africa." },
    { icon: Headphones, title: "Customer-Centred", desc: "A dedicated team to help you find exactly what you need." },
  ];
  return (
    <section className="bg-blush/50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-2xl text-rose-gold mb-1">The Ikamva promise</p>
          <h2 className="text-3xl md:text-5xl font-display text-plum-deep">Why shop with us</h2>
          <p className="mt-4 text-muted-foreground">Beauty that celebrates who you are — backed by service that treats you like royalty.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: I, title, desc }) => (
            <div key={title} className="bg-card rounded-2xl p-6 shadow-soft border border-border/40 hover:-translate-y-1 transition-transform">
              <span className="size-12 rounded-2xl bg-gradient-rose text-white flex items-center justify-center mb-4 shadow-glow">
                <I className="size-5" />
              </span>
              <h3 className="font-display text-xl text-plum-deep">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComboOptions() {
  const perks = [
    { icon: BadgeCheck, label: "Authentic Products" },
    { icon: ShoppingBag, label: "Great Value" },
    { icon: Gift, label: "Perfect Bundles" },
    { icon: Truck, label: "Fast Nationwide Delivery" },
  ];
  const combos = [
    { title: "Ultimate Hair Care Combo", blurb: "Neutralising Shampoo, Herbal Shampoo & Coconut Conditioner — 5L each.", price: "R740", was: "R900", image: comboShampoo.url },
    { title: "Herbal Shampoo & Coconut Conditioner", blurb: "A powerful duo enriched with herbal extracts and coconut oil. 5L each.", price: "R340", was: "R600", image: comboHerbal.url },
    { title: "Neutralising Shampoo & Coconut Conditioner", blurb: "Cleanse, neutralise and nourish for soft, healthy hair. 5L each.", price: "R340", was: "R600", image: comboNeutralising.url },
    { title: "Karseell Maca Care Combo", blurb: "Shampoo, Conditioner, Collagen Treatment & Essence Oil — salon quality.", price: "R650", was: "R750", image: comboKarseell.url },
    { title: "Botox Keratin Treatment Combo", blurb: "Botox Keratin Mask, Neutralising Shampoo, Conditioner & Herbal Shampoo.", price: "R350", image: comboBotox.url },
    { title: "Afripure Natural Oils Combo", blurb: "Rosemary, Jojoba, Tea Tree, Jamaican Black Castor & Batana hair oils.", price: "R250", was: "R350", image: comboAfripure.url },
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-plum-deep via-plum to-plum-deep text-primary-foreground py-20">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,oklch(0.85_0.1_40/0.45),transparent_55%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_70%,oklch(0.75_0.15_350/0.5),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-2xl text-rose-gold-light mb-1">More beauty, more value</p>
          <h2 className="text-3xl md:text-5xl font-display">Combo Options</h2>
          <p className="mt-4 text-white/80">Bundle &amp; save with our exclusive combos — curated sets that deliver beauty, value and confidence in every box.</p>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-rose-gold/40 shadow-glow mb-10">
          <img
            src={comboCover.url}
            alt="Ikamva Edge Ubuhle Combos — bundle and save with exclusive beauty combos"
            className="w-full h-auto object-cover"
            width={1536}
            height={1024}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-12">
          {perks.map(({ icon: I, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-4 py-3">
              <span className="size-10 shrink-0 rounded-xl bg-gradient-rose text-plum-deep flex items-center justify-center">
                <I className="size-5" />
              </span>
              <span className="text-sm font-medium text-white/90">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {combos.map((p) => (
            <div key={p.title} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur flex flex-col">
              <div className="aspect-[2/3] overflow-hidden bg-plum-deep">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg text-white leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed flex-1">{p.blurb}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-2xl text-rose-gold-light">{p.price}</span>
                  {p.was && <span className="text-sm text-white/50 line-through">{p.was}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-gold text-plum-deep font-semibold shadow-glow hover:bg-rose-gold-light transition-colors">
            Shop Combos Now <ArrowRight className="size-4" />
          </Link>
          <p className="mt-4 text-xs tracking-[0.25em] uppercase text-white/60">Beauty made easy · Confidence made you</p>
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  const t = [
    { name: "Lerato M.", city: "Johannesburg", quote: "Finally a South African beauty destination that takes hair and skin seriously. My orders always arrive perfectly packaged." },
    { name: "Nokuthula D.", city: "Durban", quote: "Their range is unmatched — I found brands I had been searching everywhere for. The site feels like a luxury experience." },
    { name: "Thandi K.", city: "Cape Town", quote: "Authentic products, beautiful packaging and quick delivery. Ikamva has become my go-to for self-care essentials." },
  ];
  return (
    <section className="bg-gradient-plum text-primary-foreground py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-2xl text-rose-gold-light mb-1">Loved across SA</p>
          <h2 className="text-3xl md:text-5xl font-display">Confidence, in their words</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {t.map((q) => (
            <figure key={q.name} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
              <div className="flex gap-0.5 text-rose-gold-light mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <blockquote className="text-white/90 leading-relaxed">"{q.quote}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-semibold">{q.name}</div>
                <div className="text-white/60">{q.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-rose p-10 md:p-16 text-center shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)] opacity-30" />
        <div className="relative max-w-2xl mx-auto">
          <p className="font-script text-3xl text-plum-deep mb-2">Stay in the glow</p>
          <h2 className="text-3xl md:text-4xl font-display text-plum-deep">Join The Ikamva Journal</h2>
          <p className="mt-3 text-plum-deep/80">Beauty tips, exclusive drops, and stories that celebrate African excellence — straight to your inbox.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/80 border border-white/60 text-plum-deep placeholder:text-plum-deep/50 outline-none focus:border-plum"
            />
            <button className="px-6 py-3.5 rounded-full bg-plum-deep text-primary-foreground font-semibold hover:bg-plum transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
