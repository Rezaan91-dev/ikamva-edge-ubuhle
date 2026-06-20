import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search as SearchIcon } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { FEATURED_CATEGORIES } from "@/lib/categories";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — Ikamva Edge Ubuhle" },
      { name: "description", content: "Search products, brands, categories and journal articles across Ikamva Edge Ubuhle." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const brandMatches = query ? BRANDS.filter((b) => b.toLowerCase().includes(query)).slice(0, 24) : [];
  const categoryMatches = query
    ? FEATURED_CATEGORIES.filter((c) => c.name.toLowerCase().includes(query) || c.tag.toLowerCase().includes(query))
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-5xl w-full px-4 py-16">
        <p className="font-script text-2xl text-rose-gold mb-1">Find what you love</p>
        <h1 className="font-display text-4xl md:text-5xl text-plum-deep mb-8">Search</h1>

        <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-muted/60 border border-border/60 shadow-soft">
          <SearchIcon className="size-5 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products, brands, categories…"
            className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground/70"
          />
        </div>

        {!query && (
          <p className="mt-8 text-muted-foreground">Start typing to search across our catalogue.</p>
        )}

        {query && (
          <div className="mt-10 space-y-10">
            <section>
              <h2 className="font-display text-xl text-plum-deep mb-3">Brands</h2>
              {brandMatches.length === 0 ? (
                <p className="text-sm text-muted-foreground">No brands match "{q}".</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {brandMatches.map((b) => (
                    <Link key={b} to="/shop" className="px-3 py-1.5 rounded-full border border-border/60 text-sm hover:border-rose-gold hover:text-plum">
                      {b}
                    </Link>
                  ))}
                </div>
              )}
            </section>
            <section>
              <h2 className="font-display text-xl text-plum-deep mb-3">Categories</h2>
              {categoryMatches.length === 0 ? (
                <p className="text-sm text-muted-foreground">No categories match "{q}".</p>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {categoryMatches.map((c) => (
                    <Link key={c.name} to="/shop" className="rounded-2xl border border-border/60 p-4 hover:border-rose-gold">
                      <div className="text-[10px] tracking-[0.25em] uppercase text-rose-gold">{c.tag}</div>
                      <div className="font-display text-lg text-plum-deep">{c.name}</div>
                      <div className="text-sm text-muted-foreground">{c.blurb}</div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
