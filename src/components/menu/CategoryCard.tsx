import type { MenuCategory } from "@/data/menu";

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
        className="h-44 w-full object-cover sm:h-52"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent" />
      <span className="absolute inset-x-0 bottom-0 p-4">
        <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-primary-foreground/70">
          {category.group}
        </span>
        <span className="mt-1 block font-display text-xl text-primary-foreground">
          {category.name}
        </span>
        <span className="mt-0.5 block text-xs text-primary-foreground/75">
          {category.items.length} article{category.items.length > 1 ? "s" : ""}
        </span>
      </span>
    </button>
  );
}
