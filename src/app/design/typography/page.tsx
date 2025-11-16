import BottomBorderArea from "@/containers/BottomBorderArea";
import LightArea from "@/containers/LightArea";

const TypographyPage = () => {
  return (
    <LightArea>
      <section className="flex flex-col">
        <BottomBorderArea>
          <h1 className="text-3xl font-medium text-font-dark font-serif">
            h1: Page Header
          </h1>
        </BottomBorderArea>
        <BottomBorderArea>
          <p className="text-foreground font-medium">p: Nav text</p>
        </BottomBorderArea>
        <BottomBorderArea>
          <h3 className="text-sm font-normal text-foreground">
            h3: Article title
          </h3>
        </BottomBorderArea>
        <BottomBorderArea>
          <p className="text-xs text-claude-gray leading-relaxed">
            p: Subtitle
          </p>
        </BottomBorderArea>
        <code className="text-xs font-mono text-claude-gray">
          code: Copyable Code
        </code>
      </section>
    </LightArea>
  );
};

export default TypographyPage;
