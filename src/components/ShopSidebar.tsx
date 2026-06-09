import { Link, useRouterState } from "@tanstack/react-router";
import { SHOP_CATEGORIES } from "@/lib/categories";
import { ChevronRight, Tag } from "lucide-react";

export function ShopSidebar() {
  const currentPath = useRouterState({
    select: (router) => router.location.pathname,
  });

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24">
        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="size-4 text-rose-gold" />
            <h3 className="font-display text-lg text-plum-deep">All Categories</h3>
          </div>
          <nav className="space-y-0.5">
            {SHOP_CATEGORIES.map((cat) => {
              const isActive = currentPath === `/shop/${encodeURIComponent(cat.toLowerCase().replace(/\s+/g, "-"))}`;
              return (
                <Link
                  key={cat}
                  to="/shop"
                  className={`
                    flex items-center justify-between px-3 py-2.5 rounded-xl text-sm
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
      </div>
    </aside>
  );
}
