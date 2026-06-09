import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, Heart, User, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/ikamva-logo.png.asset.json";
import { BRANDS } from "@/lib/brands";

const NAV = [
  { to: "/", label: "Home", hasBrands: false },
  { to: "/shop", label: "Shop", hasBrands: true },
  { to: "/journal", label: "Journal", hasBrands: false },
  { to: "/about", label: "About", hasBrands: false },
  { to: "/contact", label: "Contact", hasBrands: false },
] as const;

function groupBrandsByLetter(brands: string[]) {
  const groups: Record<string, string[]> = {};
  for (const b of brands) {
    const letter = b[0]?.toUpperCase() ?? "#";
    const key = /[A-Z]/.test(letter) ? letter : "#";
    (groups[key] ||= []).push(b);
  }
  return Object.keys(groups)
    .sort()
    .map((k) => ({ letter: k, items: groups[k] }));
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const brandGroups = groupBrandsByLetter(BRANDS);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="border-b border-border/40 bg-gradient-plum text-primary-foreground/90 text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-center">
          <span className="font-script text-base text-rose-gold-light">Elevating Beauty,</span>
          <span className="tracking-[0.3em] uppercase">Empowering Confidence</span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -ml-2 text-foreground"
          aria-label="Menu"
        >
          <Menu className="size-5" />
        </button>

        <Link to="/" className="flex items-center gap-2 mr-4">
          <img src={logo.url} alt="Ikamva Edge Ubuhle" className="h-11 w-11 rounded-full object-cover ring-1 ring-rose-gold/40" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-lg text-plum-deep">Ikamva Edge Ubuhle</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Beauty · Self-Care</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 ml-6 text-sm font-medium">
          {NAV.map((n) => (
            <div
              key={n.to}
              className="relative"
              onMouseEnter={() => n.hasBrands && setBrandsOpen(true)}
              onMouseLeave={() => n.hasBrands && setBrandsOpen(false)}
            >
              <Link
                to={n.to}
                className="inline-flex items-center gap-1 text-foreground/80 hover:text-plum transition-colors [&.active]:text-plum"
                activeProps={{ className: "active" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
                {n.hasBrands && <ChevronDown className="size-3.5" />}
              </Link>
              {n.hasBrands && brandsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                  <div className="w-[44rem] max-h-[70vh] overflow-y-auto rounded-xl border border-border/60 bg-background shadow-2xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-base text-plum-deep">All Brands</h3>
                      <Link to="/shop" className="text-xs uppercase tracking-widest text-plum hover:underline">
                        Shop all
                      </Link>
                    </div>
                    <div className="grid grid-cols-4 gap-x-5 gap-y-4">
                      {brandGroups.map((g) => (
                        <div key={g.letter}>
                          <div className="text-[11px] font-bold tracking-[0.2em] text-rose-gold mb-1.5">
                            {g.letter}
                          </div>
                          <ul className="space-y-1">
                            {g.items.map((b) => (
                              <li key={b}>
                                <Link
                                  to="/shop"
                                  className="text-xs text-foreground/75 hover:text-plum transition-colors block truncate"
                                >
                                  {b}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-muted/60 border border-border/50 w-72">
            <Search className="size-4 text-muted-foreground" />
            <input
              placeholder="Search products, brands…"
              className="bg-transparent text-sm outline-none flex-1 placeholder:text-muted-foreground/70"
            />
          </div>
          <button aria-label="Search" className="lg:hidden p-2 hover:text-plum"><Search className="size-5" /></button>
          <button aria-label="Account" className="p-2 hover:text-plum"><User className="size-5" /></button>
          <button aria-label="Wishlist" className="p-2 hover:text-plum"><Heart className="size-5" /></button>
          <button aria-label="Cart" className="relative p-2 hover:text-plum">
            <ShoppingBag className="size-5" />
            <span className="absolute top-1 right-1 size-4 rounded-full bg-rose-gold text-[10px] font-bold text-plum-deep flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border/50 bg-background">
          <ul className="px-4 py-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-foreground/90 border-b border-border/40 last:border-0"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setMobileBrandsOpen((v) => !v)}
                className="w-full flex items-center justify-between py-3 text-base text-foreground/90 border-b border-border/40"
              >
                <span>Brands</span>
                <ChevronDown className={`size-4 transition-transform ${mobileBrandsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileBrandsOpen && (
                <div className="max-h-[60vh] overflow-y-auto py-2">
                  {brandGroups.map((g) => (
                    <div key={g.letter} className="mb-3">
                      <div className="text-[11px] font-bold tracking-[0.2em] text-rose-gold mb-1 px-1">
                        {g.letter}
                      </div>
                      <ul className="grid grid-cols-2 gap-x-3">
                        {g.items.map((b) => (
                          <li key={b}>
                            <Link
                              to="/shop"
                              onClick={() => setOpen(false)}
                              className="block py-1.5 text-sm text-foreground/80"
                            >
                              {b}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
