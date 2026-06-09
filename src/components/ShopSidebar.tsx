import { Link, useRouterState } from "@tanstack/react-router";
import { SHOP_CATEGORIES } from "@/lib/categories";
import { BRANDS, groupBrandsByLetter } from "@/lib/brands";
import { ChevronRight, Tag, Store } from "lucide-react";

export function ShopSidebar() {
  const currentPath = useRouterState({
    select: (router) => router.location.pathname,
  });

  const brandGroups = groupBrandsByLetter(BRANDS);
  const letters = Object.keys(brandGroups).sort();

  return (
    <aside className="hidden lg:block w-72 shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Categories */}
        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="size-4 text-rose-gold" />
            <h3 className="font-display text-lg text-plum-deep">All Categories</h3>
          </div>
          <nav className="space-y-0.5 max-h-80 overflow-y-auto pr-1 scrollbar-thin">
            {SHOP_CATEGORIES.map((cat) => {
              const isActive = currentPath === `/shop/${encodeURIComponent(cat.toLowerCase().replace(/\s+/g, "-"))}`;
              return (
                <Link
                  key={cat}
                  to="/shop"
                  className={`
                    flex items-center justify-between px-3 py-2 rounded-xl text-sm
                    transition-colors
                    ${isActive
                      ? "bg-plum-deep text-primary-foreground font-medium"
                      : "text-foreground/80 hover:bg-blush/50 hover:text-plum-deep"
                    }
                  `}
                >
                  <span className="truncate pr-2">{cat}</span>
                  <ChevronRight className={`size-3.5 shrink-0 ${isActive ? "text-rose-gold-light" : "text-muted-foreground/60"}`} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Brands */}
        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <Store className="size-4 text-rose-gold" />
            <h3 className="font-display text-lg text-plum-deep">All Brands</h3>
            <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-blush text-plum-deep font-medium">{BRANDS.length}</span>
          </div>
          <div className="space-y-4 max-h-[28rem] overflow-y-auto pr-1 scrollbar-thin">
            {letters.map((letter) => (
              <div key={letter}>
                <span className="sticky top-0 inline-block px-2 py-0.5 rounded-md bg-plum-deep/10 text-plum-deep text-[10px] font-bold uppercase tracking-wider mb-1">
                  {letter}
                </span>
                <nav className="space-y-0.5">
                  {brandGroups[letter].map((brand) => (
                    <Link
                      key={brand}
                      to="/brands"
                      className="flex items-center justify-between px-3 py-1.5 rounded-xl text-sm text-foreground/80 hover:bg-blush/50 hover:text-plum-deep transition-colors"
                    >
                      <span className="truncate pr-2">{brand}</span>
                      <ChevronRight className="size-3.5 shrink-0 text-muted-foreground/60" />
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
