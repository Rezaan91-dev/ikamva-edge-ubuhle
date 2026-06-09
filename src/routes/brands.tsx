import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BRANDS, groupBrandsByLetter } from "@/lib/brands";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brand Directory A–Z — Ikamva Edge Ubuhle" },
      { name: "description", content: "Browse nearly 200 trusted beauty, haircare, skincare and wellness brands available at Ikamva Edge Ubuhle." },
      { property: "og:title", content: "Brand Directory A–Z" },
      { property: "og:description", content: "Nearly 200 brands you love, in one beautiful place." },
      { property: "og:url", content: "/brands" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(
    () => BRANDS.filter((b) => b.toLowerCase().includes(q.toLowerCase())),
    [q]
  );
  const groups = useMemo(() => groupBrandsByLetter(filtered), [filtered]);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");

  return (
    <div>
      <SiteHeader />
      <section className="bg-gradient-hero text-primary-foreground py-14">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-script text-3xl text-rose-gold-light">Discover</p>
          <h1 className="font-display text-4xl md:text-6xl">Brand Directory</h1>
          <p className="mt-4 text-white/80">Browse all {BRANDS.length} brands available at Ikamva Edge Ubuhle.</p>
          <div className="mt-6 max-w-md mx-auto flex items-center gap-2 px-4 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <Search className="size-4 text-white/70" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search brands…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/60"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-wrap gap-1.5 justify-center mb-10 sticky top-[88px] z-30 bg-background/90 backdrop-blur py-3 rounded-2xl">
          {letters.map((l) => {
            const exists = !!groups[l];
            return (
              <a
                key={l}
                href={exists ? `#letter-${l}` : undefined}
                onClick={() => exists && setActive(l)}
                className={`size-9 rounded-full text-sm font-display flex items-center justify-center transition-colors ${
                  exists ? "bg-blush text-plum-deep hover:bg-rose-gold hover:text-white" : "text-muted-foreground/40 cursor-not-allowed"
                } ${active === l ? "ring-2 ring-rose-gold" : ""}`}
              >
                {l}
              </a>
            );
          })}
        </div>

        {Object.keys(groups).sort().map((letter) => (
          <div key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-44">
            <h2 className="font-display text-4xl text-gradient-rose mb-4">{letter}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {groups[letter].map((b) => (
                <button key={b} className="text-left px-4 py-3 rounded-xl border border-border/60 bg-card hover:border-rose-gold hover:bg-blush/40 transition-colors">
                  <span className="font-medium text-sm text-plum-deep">{b}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
        {Object.keys(groups).length === 0 && (
          <p className="text-center text-muted-foreground py-12">No brands match "{q}".</p>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
