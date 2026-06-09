import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, Heart, User, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/ikamva-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/brands", label: "Brands" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
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
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/80 hover:text-plum transition-colors [&.active]:text-plum"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
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
          </ul>
        </nav>
      )}
    </header>
  );
}
