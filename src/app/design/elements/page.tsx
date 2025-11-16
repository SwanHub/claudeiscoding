import BottomBorderArea from "@/containers/BottomBorderArea";
import LightArea from "@/containers/LightArea";
import NavButton from "@/elements/NavButton";
import NavIcon from "@/elements/NavIcon";
import { MessagesSquare } from "lucide-react";

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
        <NavIcon icon={MessagesSquare} label="<NavIcon MessagesSquare />" />
      </section>
    </LightArea>
  );
};

export default ElementsPage;
