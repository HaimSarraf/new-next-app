import Hero from "@/components/Hero";
import view from "../../../public/j2.jpg";

function View() {
  return (
    <Hero
      imgSrc={view}
      imgAlt="view"
      title="A Wonderfull View"
    />
  );
}
export default View;
