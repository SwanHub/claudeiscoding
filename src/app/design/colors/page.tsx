import { COLORS } from "@/app/colors";
import LightArea from "@/containers/LightArea";

const ColorsPage = () => {
  return (
    <LightArea>
      <div className="flex flex-col gap-6">
        {COLORS.map((color) => (
          <div key={color.variable} className="overflow-hidden">
            <div
              className="h-24 w-full rounded-lg mb-3"
              style={{ backgroundColor: color.value }}
            />

            <div>
              <h3 className="font-medium text-foreground mb-1 text-sm">
                {color.name}
              </h3>
              <p className="text-xs text-claude-gray mb-2">
                {color.description}
              </p>
              <div className="flex gap-2 text-xs text-claude-gray">
                <code>{color.variable}</code>
                <code>{color.value}</code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </LightArea>
  );
};

export default ColorsPage;
