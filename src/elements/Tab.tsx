import Link from "next/link";

interface TabProps {
  label: string;
  href: string;
  isActive?: boolean;
}

const Tab = ({ label, href, isActive = false }: TabProps) => {
  return (
    <Link
      href={href}
      className={`px-0 py-2 text-sm transition-colors border-b-2 ${
        isActive
          ? "border-foreground font-medium text-foreground"
          : "border-transparent text-claude-gray hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
};

export default Tab;
