import { Plus, MessageSquare, Users, Paintbrush } from "lucide-react";

export default function SiteNavLeft() {
  return (
    <aside className="w-12 border-r border-border flex flex-col items-center py-4 gap-1">
      <div className="group relative flex items-center p-2">
        <button
          className="w-6 h-6 rounded-full bg-claude-orange hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
          aria-label="New chat"
        >
          <Plus size={14} strokeWidth={2.5} className="text-white" />
        </button>
      </div>

      <div className="group relative flex items-center">
        <button
          className="w-8 h-8 rounded-lg hover:bg-claude-beige flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Chat"
        >
          <MessageSquare size={16} strokeWidth={2} />
        </button>
        <div className="absolute left-full ml-1 px-2 py-1 bg-claude-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
          Chat
        </div>
      </div>

      <div className="group relative flex items-center">
        <button
          className="w-8 h-8 rounded-lg hover:bg-claude-beige flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Community"
        >
          <Users size={16} strokeWidth={2} />
        </button>
        <div className="absolute left-full ml-1 px-2 py-1 bg-claude-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
          Community
        </div>
      </div>

      <div className="group relative flex items-center">
        <button
          className="w-8 h-8 rounded-lg hover:bg-claude-beige flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Doodle"
        >
          <Paintbrush size={16} strokeWidth={2} />
        </button>
        <div className="absolute left-full ml-1 px-2 py-1 bg-claude-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity">
          Doodle
        </div>
      </div>
    </aside>
  );
}
