import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ShopSidebar } from "@/components/ShopSidebar";
import { FEATURED_CATEGORIES, SHOP_CATEGORIES } from "@/lib/categories";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Ikamva Edge Ubuhle" },
      { name: "description", content: "Shop haircare, skincare, makeup, men's grooming, baby care, wellness and everyday essentials from trusted South African brands." },
      { property: "og:title", content: "Shop — Ikamva Edge Ubuhle" },
      { property: "og:description", content: "Explore every category of beauty and self-care." },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

function Shop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div>
      <SiteHeader />
      <section className="bg-gradient-hero text-primary-foreground py-14">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-script text-3xl text-rose-gold-light">Find your essentials</p>
          <h1 className="font-display text-4xl md:text-6xl">Shop by Category</h1>
          <p className="mt-4 text-white/80">From crowning hair rituals to everyday lifestyle essentials.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 flex gap-8 items-start">
        <ShopSidebar />

        <main className="flex-1 min-w-0">
          {/* Mobile category toggle */}
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden mb-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/60 bg-card text-sm font-medium hover:bg-blush/40 transition-colors"
          >
            <SlidersHorizontal className="size-4" />
            All Categories
          </button>

          {mobileFiltersOpen && (
            <div className="lg:hidden mb-6 rounded-2xl border border-border/60 bg-card p-4 shadow-soft">
              <h3 className="font-display text-lg text-plum-deep mb-3">All Categories</h3>
              <nav className="space-y-0.5 max-h-72 overflow-y-auto">
                {SHOP_CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    to="/shop"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-foreground/80 hover:bg-blush/50 hover:text-plum-deep transition-colors"
                  >
                    <span>{cat}</span>
                    <ArrowRight className="size-3.5 text-muted-foreground/60" />
                  </Link>
                ))}
              </nav>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-16">
            {FEATURED_CATEGORIES.map((c) => (
              <Link key={c.name} to="/shop" className="group relative overflow-hidden rounded-3xl aspect-square shadow-soft">
                <img src={c.image} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/85 via-plum-deep/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-primary-foreground">
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs text-rose-gold-light">Browse <ArrowRight className="size-3" /></span>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="font-display text-3xl md:text-4xl text-plum-deep mb-6">All Categories</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {SHOP_CATEGORIES.map((c) => (
              <Link key={c} to="/shop" className="flex items-center justify-between px-5 py-4 rounded-2xl border border-border/60 bg-card hover:border-rose-gold hover:bg-blush/40 transition-colors group">
                <span className="font-medium text-plum-deep">{c}</span>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-rose-gold group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-gradient-plum text-primary-foreground p-10 text-center">
            <p className="font-script text-2xl text-rose-gold-light">Coming soon</p>
            <h3 className="font-display text-3xl mt-1">Full product catalogue & secure checkout</h3>
            <p className="mt-3 text-white/80 max-w-xl mx-auto">
              We're stocking the shelves. Payments via PayFast, Ozow, EFT, card and
              buy-now-pay-later are on the way — alongside wishlists, order tracking
              and free-shipping thresholds.
            </p>
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
