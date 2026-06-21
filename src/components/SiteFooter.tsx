import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MessageCircle, ShieldCheck, Truck, CreditCard } from "lucide-react";
import logo from "@/assets/ikamva-logo.png.asset.json";
import footerLogo from "@/assets/footer-ieu-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-gradient-plum text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10">
        <div className="grid gap-6 md:grid-cols-3 pb-10 border-b border-white/10">
          {[
            { icon: ShieldCheck, t: "100% Authentic", s: "Genuine products, sourced from trusted suppliers." },
            { icon: Truck, t: "Nationwide Delivery", s: "Across South Africa, fast and reliable." },
            { icon: CreditCard, t: "Secure Checkout", s: "PayFast, Ozow, EFT, Card & Buy Now Pay Later." },
          ].map(({ icon: I, t, s }) => (
            <div key={t} className="flex items-start gap-3">
              <span className="size-10 rounded-full bg-rose-gold/20 text-rose-gold-light flex items-center justify-center shrink-0">
                <I className="size-5" />
              </span>
              <div>
                <div className="font-display text-lg">{t}</div>
                <div className="text-sm text-white/70">{s}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-4 py-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo.url} alt="" className="h-12 w-12 rounded-full ring-1 ring-rose-gold/40" />
              <div className="font-display text-xl">Ikamva Edge Ubuhle</div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              South Africa's destination for beauty, haircare, skincare, wellness
              and everyday essentials — from nearly 200 trusted brands.
            </p>
            <p className="font-script text-2xl text-rose-gold-light mt-4">Elevating Beauty,</p>
            <p className="uppercase tracking-[0.3em] text-xs text-white/80">Empowering Confidence</p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-rose-gold-light">Shop</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/shop" className="hover:text-rose-gold-light">All Categories</Link></li>
              <li><Link to="/brands" className="hover:text-rose-gold-light">Brand Directory A–Z</Link></li>
              <li><Link to="/shop" className="hover:text-rose-gold-light">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-rose-gold-light">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-rose-gold-light">Support</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/contact" className="hover:text-rose-gold-light">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-rose-gold-light">About</Link></li>
              <li><Link to="/contact" className="hover:text-rose-gold-light">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-rose-gold-light">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-rose-gold-light">Stay in the glow</h4>
            <p className="text-sm text-white/70 mb-3">
              Join The Ikamva Journal — beauty tips, exclusive drops, and journal stories.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-sm placeholder:text-white/50 outline-none focus:border-rose-gold"
              />
              <button className="px-4 py-2 rounded-full bg-rose-gold text-plum-deep text-sm font-semibold hover:bg-rose-gold-light transition-colors">
                Join
              </button>
            </form>
            <div className="flex gap-2 mt-5">
              <a aria-label="Instagram" href="#" className="size-9 rounded-full bg-white/10 hover:bg-rose-gold hover:text-plum-deep flex items-center justify-center transition-colors"><Instagram className="size-4" /></a>
              <a aria-label="Facebook" href="#" className="size-9 rounded-full bg-white/10 hover:bg-rose-gold hover:text-plum-deep flex items-center justify-center transition-colors"><Facebook className="size-4" /></a>
              <a aria-label="WhatsApp" href="#" className="size-9 rounded-full bg-white/10 hover:bg-rose-gold hover:text-plum-deep flex items-center justify-center transition-colors"><MessageCircle className="size-4" /></a>
              <a aria-label="Email" href="mailto:hello@ikamvaedgeubuhle.co.za" className="size-9 rounded-full bg-white/10 hover:bg-rose-gold hover:text-plum-deep flex items-center justify-center transition-colors"><Mail className="size-4" /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-between items-center pt-6 border-t border-white/10 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Ikamva Edge Ubuhle. All rights reserved.</p>
          <div className="flex gap-4">
            <span>VISA</span><span>MASTERCARD</span><span>PAYFAST</span><span>OZOW</span><span>EFT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
