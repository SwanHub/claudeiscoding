const NavIcon = ({
  icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => {
  const IconComponent = icon as React.ElementType;
  return (
    <div className="group relative flex items-center">
      <button
        className="w-8 h-8 rounded-lg hover:bg-claude-beige flex items-center justify-center transition-colors cursor-pointer"
        aria-label={label}
      >
        <IconComponent size={16} strokeWidth={2} />
      </button>
      <div className="absolute left-full ml-1 px-2 py-1 bg-claude-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
        {label}
      </div>
    </div>
  );
};

export default NavIcon;
