import NavButton from "@/elements/NavButton";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Colors", href: "/design/colors" },
  { name: "Typography", href: "/design/typography" },
  { name: "Components", href: "/design/components" },
  { name: "Elements", href: "/design/elements" },
  { name: "Rules", href: "/design/rules" },
];

export const DesignNav = () => {
  const pathname = usePathname();

  return (
    <aside className="min-h-screen">
      <nav className="flex flex-col gap-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavButton
              key={item.href}
              href={item.href}
              isActive={isActive}
              label={item.name}
            />
          );
        })}
      </nav>
    </aside>
  );
};
