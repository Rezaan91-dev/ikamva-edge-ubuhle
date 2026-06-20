import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — Ikamva Edge Ubuhle" },
      { name: "description", content: "All the products you've saved for later, in one place." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const items: { id: string; name: string; price: string; image: string }[] = [];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-5xl w-full px-4 py-16">
        <p className="font-script text-2xl text-rose-gold mb-1">Saved for later</p>
        <h1 className="font-display text-4xl md:text-5xl text-plum-deep mb-8">Wishlist</h1>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border/70 bg-card/60 p-12 text-center">
            <span className="mx-auto size-16 rounded-full bg-blush text-plum-deep flex items-center justify-center mb-5">
              <Heart className="size-7" />
            </span>
            <h2 className="font-display text-2xl text-plum-deep mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Tap the heart on any product to save it here for later.
            </p>
            <Link to="/shop" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-gold text-plum-deep font-semibold hover:bg-rose-gold-light transition-colors">
              Start shopping <ArrowRight className="size-4" />
            </Link>
          </div>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}
