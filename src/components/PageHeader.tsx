import { Plus } from "lucide-react";

interface PageHeaderProps {
  title: string;
  buttonText: string;
}

const PageHeader = ({ title, buttonText }: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-serif text-foreground">{title}</h1>
      <button className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity">
        <Plus size={18} />
        <span className="text-sm font-medium">{buttonText}</span>
      </button>
    </div>
  );
};

export default PageHeader;
