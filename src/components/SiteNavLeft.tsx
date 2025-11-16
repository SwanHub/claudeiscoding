import CreateNewButton from "@/elements/CreateNewButton";
import NavIcon from "@/elements/NavIcon";
import { MessagesSquare, Users, Paintbrush } from "lucide-react";

export default function SiteNavLeft() {
  return (
    <aside className="fixed left-0 top-0 w-12 border-r-[0.5px] border-border flex flex-col items-center py-4 gap-1 h-screen bg-background">
      <CreateNewButton />
      <NavIcon icon={MessagesSquare} label="Chats" />
      <NavIcon icon={Users} label="Community" />
      <NavIcon icon={Paintbrush} label="Doodle" />
    </aside>
  );
}
