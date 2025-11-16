import { COLORS } from "@/app/colors";
import LightArea from "@/containers/LightArea";
import { Color } from "@/types";

const ColorSwatch = ({
  color,
  showBorder = true,
}: {
  color: Color;
  showBorder?: boolean;
}) => {
  return (
    <div
      className={`flex gap-4 items-center ${
        showBorder ? "border-b-[0.5px] border-border pb-4" : ""
      }`}
    >
      <div
        className="w-16 h-16 flex-shrink-0 border-border border-[0.5px]"
        style={{ backgroundColor: color.value }}
      />

      <div className="flex-1">
        <div className="flex justify-between items-baseline mb-1">
          <h3 className="text-sm font-normal text-foreground">{color.name}</h3>
          <code className="text-xs font-mono text-claude-gray">
            {color.value}
          </code>
        </div>
        <p className="text-xs text-claude-gray leading-relaxed">
          {color.description}
        </p>
      </div>
    </div>
  );
};

const ColorsPage = () => {
  return (
    <LightArea>
      <section className="flex flex-col gap-4">
        {COLORS.map((color, index) => (
          <ColorSwatch
            key={color.variable}
            color={color}
            showBorder={index !== COLORS.length - 1}
          />
        ))}
      </section>
    </LightArea>
  );
};

export default ColorsPage;
