import Link from "next/link";

interface NavButtonProps {
  href: string;
  isActive?: boolean;
  label: string;
}

const NavButton = ({ href, isActive = false, label }: NavButtonProps) => {
  return (
    <Link
      key={href}
      href={href}
      className={`p-3 rounded-lg w-56 transition-colors text-foreground ${
        isActive
          ? "bg-highlight-active font-semibold"
          : "hover:bg-highlight-hover font-medium"
      }`}
    >
      {label}
    </Link>
  );
};

export default NavButton;
