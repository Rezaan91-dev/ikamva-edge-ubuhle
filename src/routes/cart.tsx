import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping Cart — Ikamva Edge Ubuhle" },
      { name: "description", content: "Review your cart, see your subtotal and estimated shipping, then checkout securely." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const items: { id: string; name: string; price: number; qty: number }[] = [];
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 0 ? 95 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-6xl w-full px-4 py-16">
        <p className="font-script text-2xl text-rose-gold mb-1">Almost yours</p>
        <h1 className="font-display text-4xl md:text-5xl text-plum-deep mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border/70 bg-card/60 p-12 text-center">
            <span className="mx-auto size-16 rounded-full bg-blush text-plum-deep flex items-center justify-center mb-5">
              <ShoppingBag className="size-7" />
            </span>
            <h2 className="font-display text-2xl text-plum-deep mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Add products to your cart to see them here.
            </p>
            <Link to="/shop" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-gold text-plum-deep font-semibold hover:bg-rose-gold-light transition-colors">
              Continue shopping <ArrowRight className="size-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-8">
            <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft" />
            <aside className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft h-fit">
              <h2 className="font-display text-xl text-plum-deep mb-4">Order summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>R{subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Estimated shipping</span><span>R{shipping.toFixed(2)}</span></div>
                <div className="flex justify-between font-semibold pt-3 border-t border-border/60"><span>Total</span><span>R{total.toFixed(2)}</span></div>
              </div>
              <button className="mt-5 w-full px-6 py-3 rounded-full bg-plum-deep text-primary-foreground font-semibold hover:bg-plum transition-colors">
                Checkout
              </button>
            </aside>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
