import Link from "next/link";

const NavIcon = ({
  icon,
  label,
  isNavOpen = false,
  href,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
  isNavOpen?: boolean;
  onClick?: () => void;
}) => {
  const IconComponent = icon as React.ElementType;

  const content = (
    <>
      <span
        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 ${
          isNavOpen ? "" : "hover:bg-highlight-hover"
        }`}
        aria-label={label}
        onClick={onClick}
      >
        <IconComponent size={16} strokeWidth={1.5} />
      </span>
      {isNavOpen ? (
        <span className="ml-3 text-sm text-foreground whitespace-nowrap">
          {label}
        </span>
      ) : (
        <div className="absolute left-full ml-1 px-2 py-1 bg-claude-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
          {label}
        </div>
      )}
    </>
  );

  const wrapperClass = `group relative flex items-center w-full ${
    isNavOpen
      ? "hover:bg-highlight-active rounded-lg px-1 py-1 -mx-1 transition-colors"
      : ""
  }`;

  if (href) {
    return (
      <Link href={href} className={wrapperClass}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
};

export default NavIcon;
