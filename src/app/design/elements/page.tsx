import LightArea from "@/containers/LightArea";
import NavButton from "@/elements/NavButton";

const ElementsPage = () => {
  return (
    <LightArea>
      <section className="flex flex-col">
        <span className="flex flex-col pb-4 mb-4 border-b border-border">
          <NavButton
            href="/design/elements"
            isActive={true}
            label="<NavButton isActive />"
          />
        </span>
        <NavButton href="/design/elements" label="<NavButton />" />
      </section>
    </LightArea>
  );
};

export default ElementsPage;
