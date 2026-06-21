import { useState } from "react";
import { X } from "lucide-react";
import { useLocation } from "@tanstack/react-router";

const WHATSAPP_NUMBER = "27000000000";

const PAGE_MESSAGES: Record<string, string> = {
  "/": "Hi Ikamva Edge Ubuhle! I just discovered your store and would love some help finding the perfect products for me.",
  "/about": "Hi Ikamva Edge Ubuhle! I was reading about your brand story and would love to learn more about what you offer.",
  "/shop": "Hi Ikamva Edge Ubuhle! I'm browsing your shop and have a few questions about your products before I place an order.",
  "/journal": "Hi Ikamva Edge Ubuhle! I enjoyed reading your journal and would love to hear more about your latest arrivals and tips.",
  "/contact": "Hi Ikamva Edge Ubuhle! I visited your contact page and thought I'd reach out directly for a quicker response.",
  "/account": "Hi Ikamva Edge Ubuhle! I need some help with my account, orders, or wishlist — could you assist me please?",
  "/wishlist": "Hi Ikamva Edge Ubuhle! I have some items saved in my wishlist and would love more details before I buy.",
  "/cart": "Hi Ikamva Edge Ubuhle! I'm about to checkout and have a quick question about my cart and delivery.",
  "/search": "Hi Ikamva Edge Ubuhle! I was searching your store and need a little guidance finding exactly what I'm looking for.",
  "/brands": "Hi Ikamva Edge Ubuhle! I was exploring your brands and would love recommendations on what suits me best.",
  "/trust": "Hi Ikamva Edge Ubuhle! I saw your trust & authenticity info and would love to confirm a few things before ordering.",
};

function getPrefillMessage(pathname: string): string {
  const message = PAGE_MESSAGES[pathname];
  if (message) return encodeURIComponent(message);
  return encodeURIComponent(
    "Hi Ikamva Edge Ubuhle! I'm interested in your products and would love some assistance."
  );
}

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const prefill = getPrefillMessage(location.pathname);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="animate-in fade-in slide-in-from-bottom-2 mb-2 max-w-xs rounded-2xl bg-white p-4 shadow-2xl border border-border/50">
          <div className="flex items-center justify-between mb-2">
            <span className="font-display text-base text-plum-deep">Ikamva Edge Ubuhle</span>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-muted-foreground hover:text-foreground">
              <X className="size-4" />
            </button>
          </div>
          <p className="text-sm text-foreground/80 mb-3">
            Hi there! How can we help you today?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${prefill}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white hover:bg-whatsapp-dark transition-colors"
          >
            <WhatsAppIcon className="size-4" />
            Chat on WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className="group flex items-center gap-3 rounded-full bg-whatsapp p-4 text-white shadow-lg shadow-whatsapp/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-whatsapp/40 animate-pulse-glow"
      >
        <WhatsAppIcon className="size-6" />
        <span className="hidden pr-2 text-sm font-medium group-hover:inline-block">
          Chat with us
        </span>
      </button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
