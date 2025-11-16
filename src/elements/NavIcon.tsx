import Link from "next/link";

const NavIcon = ({
  icon,
  label,
  isNavOpen = false,
  href,
  isActive = false,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  isNavOpen: boolean;
  href?: string;
  onClick?: () => void;
}) => {
  const IconComponent = icon as React.ElementType;

  const statefulHighlightClass = isActive
    ? "bg-highlight-active"
    : isNavOpen
    ? "hover:bg-highlight-active"
    : "hover:bg-highlight-hover";

  return (
    <Link
      href={href || ""}
      className={`rounded-lg p-2 group relative flex justify-start text-left items-center
        w-full transition-colors ${statefulHighlightClass}`}
      onClick={onClick}
    >
      <IconComponent size={16} strokeWidth={1.5} />
      <span
        className={`ml-3 text-xs text-foreground whitespace-nowrap ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        {label}
      </span>
      {!isNavOpen && (
        <div className="absolute left-full ml-1 px-2 py-1 bg-claude-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
          {label}
        </div>
      )}
    </Link>
  );
};

export default NavIcon;
