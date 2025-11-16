import LightArea from "@/containers/LightArea";
import NavButton from "@/elements/NavButton";
import NavIcon from "@/elements/NavIcon";
import { MessageSquare } from "lucide-react";

const BottomBorderArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative flex flex-col pb-4 mb-4 border-b-[0.5px] border-border">
      {children}
    </span>
  );
};

const ElementsPage = () => {
  return (
    <LightArea>
      <section className="flex flex-col">
        <BottomBorderArea>
          <NavButton
            href="/design/elements"
            isActive={true}
            label="<NavButton isActive />"
          />
        </BottomBorderArea>
        <BottomBorderArea>
          <NavButton
            href="/design/elements"
            isActive={false}
            label="<NavButton />"
          />
        </BottomBorderArea>
        <NavIcon icon={MessageSquare} label="<NavIcon MessageSquare />" />
      </section>
    </LightArea>
  );
};

export default ElementsPage;
