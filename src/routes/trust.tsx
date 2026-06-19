import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ShieldCheck, Lock, Cookie, Mail, FileText, Users, Database, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/trust")({
  component: TrustPage,
  head: () => ({
    meta: [
      { title: "Trust & Privacy | Ikamva Edge Ubuhle" },
      {
        name: "description",
        content:
          "How Ikamva Edge Ubuhle handles your data, account security, cookies, and privacy requests.",
      },
      { property: "og:title", content: "Trust & Privacy | Ikamva Edge Ubuhle" },
      {
        property: "og:description",
        content:
          "How Ikamva Edge Ubuhle handles your data, account security, cookies, and privacy requests.",
      },
    ],
  }),
});

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="size-10 rounded-full bg-rose-gold/15 text-plum flex items-center justify-center">
          <Icon className="size-5" />
        </span>
        <h2 className="font-display text-2xl text-plum-deep">{title}</h2>
      </div>
      <div className="text-sm leading-relaxed text-foreground/80 space-y-3">{children}</div>
    </section>
  );
}

function TrustPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-14">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-gold mb-3">
            Trust Centre
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-plum-deep">
            Trust, Security & Privacy
          </h1>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            This page is maintained by Ikamva Edge Ubuhle to answer common
            security and privacy questions about our store. It describes
            current practices and is not an independent certification.
          </p>
        </div>

        <div className="grid gap-6">
          <Section icon={Lock} title="Account Access & Authentication">
            <p>
              Customer accounts are protected by email and password
              authentication. Passwords are never stored in plain text. You
              control access to your account and should keep your credentials
              private.
            </p>
          </Section>

          <Section icon={ShieldCheck} title="Platform & Hosting">
            <p>
              Our website runs on the Lovable Cloud platform, which provides
              managed hosting, TLS-encrypted connections in transit, and a
              managed database with row-level access controls. Lovable
              platform capabilities support our setup but do not constitute an
              independent certification of this store.
            </p>
          </Section>

          <Section icon={Database} title="Data We Collect & How We Use It">
            <p>
              We collect the information you provide when you create an
              account, place an order, or contact us — for example name,
              email, delivery address, and order details. We use this
              information to process orders, deliver products, provide
              support, and send updates you have opted in to.
            </p>
            <p>
              We do not sell your personal information. Specific retention
              periods and detailed data handling questions can be sent to
              the contact address below.
            </p>
          </Section>

          <Section icon={Users} title="Third-Party Services">
            <p>
              We use trusted third parties to operate the store, including
              payment providers (PayFast, Ozow, card processors) and delivery
              partners. These providers only receive the information needed
              to complete their part of your order.
            </p>
          </Section>

          <Section icon={Cookie} title="Cookies & Analytics">
            <p>
              We use cookies and similar technologies to keep you signed in,
              remember your cart, and understand how the site is used so we
              can improve it. You can manage cookies through your browser
              settings.
            </p>
          </Section>

          <Section icon={FileText} title="Your Privacy Rights">
            <p>
              You can request access to, correction of, or deletion of your
              personal information held by us. To make a request, contact us
              using the details below and we will respond within a reasonable
              time.
            </p>
          </Section>

          <Section icon={AlertCircle} title="Reporting a Security Concern">
            <p>
              If you believe you have found a security issue affecting our
              site or customer data, please contact us at the address below
              with a description of the issue. Please do not publicly disclose
              details until we have had a reasonable opportunity to respond.
            </p>
          </Section>

          <Section icon={Mail} title="Contact">
            <p>
              Privacy and security enquiries:{" "}
              <a
                href="mailto:hello@ikamvaedgeubuhle.co.za"
                className="text-plum underline hover:text-rose-gold"
              >
                hello@ikamvaedgeubuhle.co.za
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
