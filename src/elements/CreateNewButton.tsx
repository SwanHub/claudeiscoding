import { Plus } from "lucide-react";

const CreateNewButton = ({ isNavOpen = false }: { isNavOpen?: boolean }) => {
  const wrapperClass = `group relative flex items-center w-full p-0.5 ${
    isNavOpen
      ? "hover:bg-highlight-active rounded-lg px-1 py-1 -mx-1 transition-colors"
      : ""
  }`;

  return (
    <div className={wrapperClass}>
      <button
        className="w-6 h-6 rounded-full bg-claude-orange hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer flex-shrink-0"
        aria-label="Create new chat"
      >
        <Plus size={16} strokeWidth={2} className="text-white" />
      </button>
      {isNavOpen && (
        <span className="ml-3 text-sm text-foreground whitespace-nowrap">
          New Chat
        </span>
      )}
    </div>
  );
};

export default CreateNewButton;
