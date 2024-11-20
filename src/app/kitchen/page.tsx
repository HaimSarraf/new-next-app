import Hero from "@/components/Hero";
import kitchen from "../../../public/e4.jpg";

function Kitchen() {
  return (
    <Hero
      imgSrc={kitchen}
      imgAlt="kitchen"
      title="Nice Kitchen To Cook Delicious Food"
    />
  );
}
export default Kitchen;
