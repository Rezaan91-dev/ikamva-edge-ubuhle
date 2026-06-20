import { createFileRoute, Link } from "@tanstack/react-router";
import { User, LogIn, UserPlus, Package, Heart, Settings } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My Account — Ikamva Edge Ubuhle" },
      { name: "description", content: "Sign in, register, view orders, manage your wishlist and update your account settings." },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const tiles = [
    { icon: LogIn, title: "Login", desc: "Access your account and order history.", to: "/account" as const },
    { icon: UserPlus, title: "Register", desc: "Create a new Ikamva Edge Ubuhle account.", to: "/account" as const },
    { icon: Package, title: "Orders", desc: "Track your orders and view past purchases.", to: "/account" as const },
    { icon: Heart, title: "Wishlist", desc: "Products you've saved for later.", to: "/wishlist" as const },
    { icon: Settings, title: "Account Settings", desc: "Update your details, address and preferences.", to: "/account" as const },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-5xl w-full px-4 py-16">
        <div className="flex items-center gap-4 mb-10">
          <span className="size-14 rounded-full bg-gradient-rose text-white flex items-center justify-center shadow-glow">
            <User className="size-6" />
          </span>
          <div>
            <p className="font-script text-2xl text-rose-gold">Welcome</p>
            <h1 className="font-display text-3xl md:text-4xl text-plum-deep">My Account</h1>
          </div>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-soft mb-8">
          <h2 className="font-display text-xl text-plum-deep mb-2">Sign in</h2>
          <p className="text-sm text-muted-foreground mb-5">Sign in to access your orders, wishlist and personalised recommendations.</p>
          <form className="grid sm:grid-cols-2 gap-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-full border border-border/60 bg-background outline-none focus:border-rose-gold text-sm" />
            <input type="password" placeholder="Password" className="px-4 py-3 rounded-full border border-border/60 bg-background outline-none focus:border-rose-gold text-sm" />
            <button className="sm:col-span-2 px-6 py-3 rounded-full bg-plum-deep text-primary-foreground font-semibold hover:bg-plum transition-colors">
              Sign in
            </button>
          </form>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tiles.map(({ icon: I, title, desc, to }) => (
            <Link key={title} to={to} className="group rounded-2xl border border-border/60 bg-card p-5 hover:border-rose-gold transition-colors">
              <span className="size-10 rounded-xl bg-blush text-plum-deep flex items-center justify-center mb-3">
                <I className="size-5" />
              </span>
              <div className="font-display text-lg text-plum-deep">{title}</div>
              <div className="text-sm text-muted-foreground mt-1">{desc}</div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
