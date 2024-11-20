import type { StaticImageData } from "next/image";
import Image from "next/image";

type HeroProps = {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  children?: React.ReactNode;
};

const Hero = ({ imgSrc, imgAlt, title, children }: HeroProps) => {
  return (
    <div className={`${!children}` ? "relative h-screen" : " h-1/4"}>
      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          fill
          alt={imgAlt}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900" />
      <div className="pt-48 flex flex-col justify-center items-center">
        <h1 className="font-bold shadow-md shadow-[#c4ff70] p-4 z-10 rounded-lg lg:text-6xl md:text-3xl">
          {title}
        </h1>
        <div className=" flex flex-col p-2 gap-2 z-10 lg:text-3xl md:text-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
