import { formatPrice, type MenuCategory, type MenuItem } from "@/data/menu";
import { CactusDecor } from "./CactusDecor";

function Row({ item }: { item: MenuItem }) {
  return (
    <li className="flex items-start gap-4 border-b border-border/70 py-3 last:border-0">
      <div className="min-w-0 flex-1">
        <p className="font-medium leading-snug text-foreground">{item.name}</p>
        {item.description ? (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        ) : null}
      </div>
      <span className="shrink-0 font-display text-lg text-primary">
        {formatPrice(item.price)}
      </span>
    </li>
  );
}

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} className="scroll-mt-36">
      <div className="overflow-hidden rounded-3xl bg-card shadow-soft">
        <div className="relative">
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            width={928}
            height={720}
            className="h-40 w-full object-cover sm:h-48"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-primary-foreground/70">
              {category.group}
            </p>
            <h2 className="mt-1 font-display text-2xl text-primary-foreground sm:text-3xl">
              {category.name}
            </h2>
          </div>
        </div>
        <ul className="px-5 pb-5 pt-2 sm:px-7">
          {category.items.map((item) => (
            <Row key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
