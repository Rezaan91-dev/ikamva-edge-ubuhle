import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Ikamva Journal — Beauty, Self-Care & Wellness" },
      { name: "description", content: "Hair care tips, skincare education, beauty trends, product spotlights, wellness advice and self-care inspiration from Ikamva Edge Ubuhle." },
      { property: "og:title", content: "The Ikamva Journal" },
      { property: "og:description", content: "Stories that elevate beauty and empower confidence." },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: Journal,
});

const POSTS = [
  { tag: "Hair Care Tips", title: "The protective-style ritual every wash day deserves", excerpt: "Five simple steps to nourish, hydrate and protect your crown — without overloading your routine." },
  { tag: "Skincare", title: "Building a glow-up skincare routine for African skin", excerpt: "The order, the ingredients, and the SA-friendly products that make all the difference." },
  { tag: "Beauty Trends", title: "Rose gold meets royal plum: the colour story of the season", excerpt: "How to wear the Ikamva palette in your makeup, fashion and self-care." },
  { tag: "Wellness", title: "Inner beauty starts here: supplements worth your shelf space", excerpt: "A grounded look at the wellness essentials we keep restocking." },
  { tag: "Product Spotlight", title: "Native Child × Ikamva: meet the bestsellers", excerpt: "We unpack why this homegrown favourite keeps flying off our digital shelves." },
  { tag: "Self-Care", title: "30 minutes to yourself: an at-home spa blueprint", excerpt: "Light a candle, queue the playlist — here's your soft-life evening, made simple." },
];

function Journal() {
  return (
    <div>
      <SiteHeader />
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-script text-3xl text-rose-gold-light">Stories & Inspiration</p>
          <h1 className="font-display text-4xl md:text-6xl">The Ikamva Journal</h1>
          <p className="mt-4 text-white/80">Beauty, haircare, skincare and self-care — celebrated.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POSTS.map((p) => (
            <article key={p.title} className="rounded-3xl bg-card border border-border/50 overflow-hidden shadow-soft hover:-translate-y-1 transition-transform">
              <div className="aspect-[4/3] bg-gradient-rose relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)] opacity-40" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-white/90 text-plum-deep px-3 py-1 rounded-full">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-plum-deep leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
                <button className="mt-4 text-sm font-medium text-rose-gold hover:text-plum">Read article →</button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
