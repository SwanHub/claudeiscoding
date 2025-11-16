import Avatar from "@/elements/Avatar";

interface DoodleCardProps {
  title: string;
  thumbnail?: string;
  backgroundColor?: string;
}

const DoodleCard = ({
  title,
  thumbnail,
  backgroundColor = "#e5e5e5",
}: DoodleCardProps) => {
  return (
    <div className="flex flex-col gap-3 cursor-pointer group">
      <div
        className="aspect-[4/3] rounded-lg overflow-hidden transition-transform group-hover:scale-[1.02]"
        style={{ backgroundColor }}
      >
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex items-center gap-2">
        <Avatar alt={title} size="sm" />
        <h3 className="text-sm text-foreground">{title}</h3>
      </div>
    </div>
  );
};

export default DoodleCard;
