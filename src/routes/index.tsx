import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowUp, MapPin, Search } from "lucide-react";
import logo from "@/assets/cactopia-logo.jpg.asset.json";
import hero from "@/assets/hero-desert.jpg";
import { categories, formatPrice } from "@/data/menu";
import { CategoryCard } from "@/components/menu/CategoryCard";
import { MenuSection } from "@/components/menu/MenuSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cactopia — Menu du coffee shop à Boumhel, Tunisie" },
      {
        name: "description",
        content:
          "Le menu Cactopia à Boumhel : cafés, chocolats, thés, iced coffee, jus frais, crêpes, gaufres, omelettes et formules petit déjeuner avec prix en DT.",
      },
      { property: "og:title", content: "Cactopia — Notre Menu" },
      {
        property: "og:description",
        content:
          "Cafés, boissons froides, crêpes et formules petit déjeuner. Le menu complet du coffee shop Cactopia à Boumhel, Tunisie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return categories;
    return categories
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (i) =>
            i.name.toLowerCase().includes(q) ||
            c.name.toLowerCase().includes(q) ||
            (i.description ?? "").toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [q]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <img
              src={logo.url}
              alt="Cactopia"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
            <span className="truncate font-display text-lg text-primary">Cactopia</span>
          </a>
          <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Boumhel
          </span>
        </div>
        <div className="mx-auto max-w-5xl px-4 pb-3">
          <label className="relative block">
            <span className="sr-only">Rechercher un produit</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher : espresso, crêpe, jus…"
              className="w-full rounded-full border border-border bg-card py-2.5 pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
          </label>
        </div>
        <nav
          aria-label="Catégories"
          className="mx-auto max-w-5xl overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex gap-2">
            {categories.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(c.id)}
                  className="whitespace-nowrap rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <img
            src={hero}
            alt="Cactus dans le désert au coucher du soleil"
            width={1600}
            height={912}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
          <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:py-24">
            <img
              src={logo.url}
              alt="Logo Cactopia"
              width={220}
              height={220}
              className="mx-auto w-40 rounded-3xl sm:w-52"
            />
            <p className="mt-6 text-[0.7rem] uppercase tracking-[0.3em] text-primary/80">
              Notre Menu
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-primary sm:text-5xl">
              Une oasis de saveurs à Boumhel
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Cafés de caractère, boissons glacées et crêpes gourmandes, servis à
              l'ombre de nos cactus.
            </p>
            <button
              type="button"
              onClick={() => scrollTo("categories")}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
            >
              Découvrir le menu
            </button>
          </div>
        </section>

        <section id="categories" className="mx-auto max-w-5xl scroll-mt-40 px-4 py-12">
          <h2 className="font-display text-2xl text-primary sm:text-3xl">Catégories</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.id} category={c} onSelect={scrollTo} />
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-8 px-4 pb-20">
          {q ? (
            <p className="text-sm text-muted-foreground">
              {filtered.reduce((n, c) => n + c.items.length, 0)} résultat(s) pour «{" "}
              {query} »
            </p>
          ) : null}
          {filtered.map((c) => (
            <MenuSection key={c.id} category={c} />
          ))}
          {filtered.length === 0 ? (
            <p className="rounded-3xl bg-card p-8 text-center text-sm text-muted-foreground shadow-soft">
              Aucun produit ne correspond à votre recherche.
            </p>
          ) : null}
        </div>
      </main>

      <footer className="border-t border-border/70 px-4 py-10 text-center">
        <p className="font-display text-xl text-primary">Cactopia</p>
        <p className="mt-2 text-sm text-muted-foreground">Boumhel, Tunisie</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Prix en dinars tunisiens (DT) · Exemple : Espresso {formatPrice(4)}
        </p>
      </footer>

      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Retour en haut"
          className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
