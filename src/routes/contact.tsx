import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ikamva Edge Ubuhle" },
      { name: "description", content: "Get in touch with the Ikamva Edge Ubuhle team. Email, WhatsApp, business hours and customer support across South Africa." },
      { property: "og:title", content: "Contact — Ikamva Edge Ubuhle" },
      { property: "og:description", content: "We're here to help — message us anytime." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <SiteHeader />
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-script text-3xl text-rose-gold-light">Let's chat</p>
          <h1 className="font-display text-4xl md:text-6xl">Contact us</h1>
          <p className="mt-4 text-white/80">Confidence starts with a conversation — we'd love to hear from you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-5">
          {[
            { icon: Mail, t: "Email", v: "hello@ikamvaedgeubuhle.co.za" },
            { icon: MessageCircle, t: "WhatsApp", v: "+27 00 000 0000" },
            { icon: Clock, t: "Hours", v: "Mon – Fri · 08:00 – 17:00 SAST" },
            { icon: MapPin, t: "Based in", v: "South Africa · Nationwide delivery" },
          ].map(({ icon: I, t, v }) => (
            <div key={t} className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border/50 shadow-soft">
              <span className="size-10 rounded-full bg-gradient-rose text-white flex items-center justify-center shrink-0"><I className="size-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{t}</div>
                <div className="font-medium text-plum-deep mt-1">{v}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-soft space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Field label="Subject" name="subject" />
          <div>
            <label className="block text-sm font-medium text-plum-deep mb-1.5">Message</label>
            <textarea required rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-rose-gold" />
          </div>
          <button className="w-full py-3.5 rounded-full bg-plum text-primary-foreground font-semibold hover:bg-plum-deep transition-colors">
            {sent ? "Message sent — thank you!" : "Send message"}
          </button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-plum-deep mb-1.5">{label}</label>
      <input required name={name} type={type} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-rose-gold" />
    </div>
  );
}
