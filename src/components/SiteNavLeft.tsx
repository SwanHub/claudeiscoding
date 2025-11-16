"use client";

import { useNav } from "@/contexts/NavContext";
import CreateNewButton from "@/elements/CreateNewButton";
import NavIcon from "@/elements/NavIcon";
import { MessagesSquare, Users, Paintbrush, PanelLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SiteNavLeft() {
  const { isNavOpen, setIsNavOpen } = useNav();
  const pathname = usePathname();

  return (
    <nav
      className={`fixed left-0 top-0 border-r-[0.5px] border-border flex flex-col items-start py-4 px-2 gap-1 h-screen transition-all ease-out ${
        isNavOpen
          ? "w-72 bg-highlight-hover duration-300"
          : "w-12 bg-background duration-100"
      }`}
    >
      <div className="w-full mb-6">
        <NavIcon
          icon={PanelLeft}
          label="Menu"
          isNavOpen={isNavOpen}
          isActive={false}
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        {/* <CreateNewButton isNavOpen={isNavOpen} /> */}
        <NavIcon
          href="/chats"
          icon={MessagesSquare}
          label="Chats"
          isActive={pathname === "/chats"}
          isNavOpen={isNavOpen}
        />
        <NavIcon
          href="/community"
          icon={Users}
          label="Community"
          isActive={pathname === "/community"}
          isNavOpen={isNavOpen}
        />
        <NavIcon
          href="/doodle"
          icon={Paintbrush}
          label="Doodle"
          isActive={pathname === "/doodle"}
          isNavOpen={isNavOpen}
        />
      </div>
    </nav>
  );
}
