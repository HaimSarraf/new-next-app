import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          href="/"
          className="font-bold text-3xl hover:shadow-none shadow-sm rounded-lg shadow-[#c4ff70] p-2 hover:text-black hover:bg-[#c4ff70] hover:rounded-lg"
        >
          Homepage
        </Link>
        <div className="space-x-10 text-lg">
          <Link
            href="/body"
            className=" shadow-sm shadow-[#c4ff70] hover:bg-[#c4ff70] hover:font-bold hover:text-black rounded-lg  p-2"
          >
            Body
          </Link>
          <Link
            href="/master"
            className=" shadow-sm shadow-[#c4ff70] hover:bg-[#c4ff70] hover:font-bold hover:text-black rounded-lg  p-2"
          >
            Master
          </Link>
          <Link
            href="/training"
            className=" shadow-sm shadow-[#c4ff70] hover:bg-[#c4ff70] hover:font-bold hover:text-black rounded-lg  p-2"
          >
            Training
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
