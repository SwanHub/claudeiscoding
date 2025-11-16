interface CategoryTagProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryTag = ({
  label,
  isActive = false,
  onClick,
}: CategoryTagProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
        isActive
          ? "bg-foreground text-background"
          : "bg-claude-beige text-foreground hover:bg-highlight-active"
      }`}
    >
      {label}
    </button>
  );
};

export default CategoryTag;
