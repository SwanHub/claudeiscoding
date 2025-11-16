"use client";

import { useNav } from "@/contexts/NavContext";
import CreateNewButton from "@/elements/CreateNewButton";
import NavIcon from "@/elements/NavIcon";
import { MessagesSquare, Users, Paintbrush, PanelLeft } from "lucide-react";

export default function SiteNavLeft() {
  const { isNavOpen, setIsNavOpen } = useNav();

  return (
    <nav
      className={`fixed left-0 top-0 border-r-[0.5px] border-border flex flex-col items-start py-4 gap-1 h-screen transition-all ease-out ${
        isNavOpen
          ? "w-72 bg-highlight-hover duration-300"
          : "w-12 bg-background duration-100"
      }`}
    >
      <div className="w-full px-2 mb-6">
        <NavIcon
          icon={PanelLeft}
          label="Menu"
          isNavOpen={isNavOpen}
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      </div>
      <div className="w-full px-2 flex flex-col gap-1">
        <CreateNewButton isNavOpen={isNavOpen} />
        <NavIcon icon={MessagesSquare} label="Chats" isNavOpen={isNavOpen} />
        <NavIcon icon={Users} label="Community" isNavOpen={isNavOpen} />
        <NavIcon icon={Paintbrush} label="Doodle" isNavOpen={isNavOpen} />
      </div>
    </nav>
  );
}
