import Link from "next/link";
import { useRouter } from "next/router";
import CollectButton from "../CollectButton";

const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className="body-font z-10 transition-none sticky top-0 bg-[#1D161F] backdrop-blur-md bg-opacity-70 border-b border-gray-800">
      <div className="container mx-auto flex flex-wrap px-4 py-3 flex-col md:flex-row items-center gap-x-10 gap-y-2">
        <Link href="/">
          <span className="flex title-font font-medium items-center">
            <img width={46} src="/logo.png" />
            <span className="ml-3 text-xl">StarkVerse</span>
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-x-4 md:gap-x-10">
          {pathname === "/" && (
            <>
              <a href="#home">Home</a>
              <a href="#who">For You</a>
              <a href="#feature">Features</a>
              <a href="#map">RoadMap</a>
            </>
          )}
        </nav>
        <CollectButton />
      </div>
    </header>
  );
};
export default Header;
