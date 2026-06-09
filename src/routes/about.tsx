import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/hero-woman.jpg";
import { Heart, Sparkles, Users, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ikamva Edge Ubuhle" },
      { name: "description", content: "Our story: helping South Africans look and feel their best through trusted beauty, haircare, skincare and wellness brands." },
      { property: "og:title", content: "About — Ikamva Edge Ubuhle" },
      { property: "og:description", content: "Elevating beauty, empowering confidence across South Africa." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <SiteHeader />
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-script text-3xl text-rose-gold-light mb-2">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl">Beauty that celebrates who you are</h1>
          <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            At Ikamva Edge Ubuhle, we believe beauty extends beyond appearance.
            Our mission is to provide quality products that elevate beauty and
            empower confidence in every individual.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img src={hero} alt="" className="rounded-3xl shadow-soft aspect-[4/5] object-cover" loading="lazy" />
        <div>
          <p className="font-script text-2xl text-rose-gold">Who we are</p>
          <h2 className="font-display text-3xl md:text-4xl text-plum-deep mt-1">A home for self-care, made for South Africa</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We curate beauty, haircare, skincare, wellness and personal care
            products from nearly 200 trusted brands — bringing them together in
            one inclusive shopping experience. From everyday essentials to
            premium discoveries, every product is chosen to help you look and
            feel your absolute best.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Through exceptional service and an inclusive philosophy, we aspire
            to become one of South Africa's most loved destinations for beauty
            and self-care.
          </p>
        </div>
      </section>

      <section className="bg-blush/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl md:text-4xl text-plum-deep text-center">What we stand for</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { icon: Heart, t: "Confidence", d: "Every product is a tool to help you stand a little taller." },
              { icon: Sparkles, t: "Elegance", d: "A refined experience, from browsing to unboxing." },
              { icon: Users, t: "Inclusivity", d: "Beauty for every skin, every hair, every story." },
              { icon: Globe, t: "African Excellence", d: "Proudly championing the best of our continent." },
            ].map(({ icon: I, t, d }) => (
              <div key={t} className="bg-card rounded-2xl p-6 border border-border/40">
                <span className="size-12 rounded-full bg-gradient-rose text-white flex items-center justify-center mb-3"><I className="size-5" /></span>
                <h3 className="font-display text-xl text-plum-deep">{t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
