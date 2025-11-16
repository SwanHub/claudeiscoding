import CreateNewButton from "@/elements/CreateNewButton";
import NavIcon from "@/elements/NavIcon";
import { MessageSquare, Users, Paintbrush } from "lucide-react";

export default function SiteNavLeft() {
  return (
    <aside className="w-12 border-r border-border flex flex-col items-center py-4 gap-1">
      <CreateNewButton />
      <NavIcon icon={MessageSquare} label="Chat" />
      <NavIcon icon={Users} label="Community" />
      <NavIcon icon={Paintbrush} label="Doodle" />
    </aside>
  );
}
