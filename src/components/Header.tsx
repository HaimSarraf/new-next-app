import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/h1.jpg";

const Header = () => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          href="/"
          className="font-bold text-3xl hover:bg-yellow-300 hover:rounded-3xl"
        >
          <Image
            src={logo}
            alt="logo"
            width={124}
            height={124}
            className="rounded-lg grayscale hover:grayscale-0 hover:scale-105"
          />
        </Link>
        <div className="space-x-10 text-lg">
          <Link
            href="/bedroom"
            className=" shadow-md hover:shadow-[#c4ff70] hover:text-[#c4ff70] hover:font-bold rounded-lg  p-2"
          >
            Bedroom
          </Link>
          <Link
            href="/kitchen"
            className=" shadow-md hover:shadow-[#c4ff70] hover:text-[#c4ff70] hover:font-bold rounded-lg p-2"
          >
            Kitchen
          </Link>
          <Link
            href="/view"
            className=" shadow-md hover:shadow-[#c4ff70] hover:text-[#c4ff70] hover:font-bold rounded-lg p-2"
          >
            View
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
