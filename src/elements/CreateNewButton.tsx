import { Plus } from "lucide-react";

const CreateNewButton = () => {
  return (
    <div className="group relative flex items-center p-2">
      <button
        className="w-6 h-6 rounded-full bg-claude-orange hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
        aria-label="Create new chat"
      >
        <Plus size={16} strokeWidth={2} className="text-white" />
      </button>
    </div>
  );
};

export default CreateNewButton;
