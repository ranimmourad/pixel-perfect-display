import type { MenuCategory } from "@/data/menu";
import { CactusDecor } from "./CactusDecor";

export function CategoryCard({
  category,
  onSelect,
}: {
  category: MenuCategory;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(category.id)}
      className="group relative block w-full overflow-hidden rounded-3xl text-left shadow-soft transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        width={928}
        height={720}
        className="h-36 w-full object-cover sm:h-52"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <CactusDecor className="pointer-events-none absolute right-2.5 top-2.5 h-9 w-6 text-primary-foreground/30 sm:h-11 sm:w-8" />
      <span className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <span className="block text-[0.6rem] uppercase tracking-[0.18em] text-primary-foreground/70 sm:text-[0.68rem] sm:tracking-[0.22em]">
          {category.group}
        </span>
        <span className="mt-1 block font-display text-base leading-tight text-primary-foreground sm:text-xl">
          {category.name}
        </span>
        <span className="mt-0.5 block text-[0.7rem] text-primary-foreground/75 sm:text-xs">
          {category.items.length} article{category.items.length > 1 ? "s" : ""}
        </span>
      </span>
    </button>
  );
}
