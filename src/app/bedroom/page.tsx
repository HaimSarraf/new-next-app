import Hero from "@/components/Hero";
import bedroom from "../../../public/c4.jpg";

function Bedroom() {
  return (
    <Hero
      imgSrc={bedroom}
      imgAlt="bedroom"
      title="The Place You Rest Peacefully"
    />
  );
}
export default Bedroom;
