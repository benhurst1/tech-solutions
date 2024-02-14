import NavBar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Header({ setNavOpen, navOpen }) {
  return (
    <div
      className={`bg-slate-100 flex justify-between w-full px-[20%] md:relative sticky z-10 top-0 shadow-xl`}
    >
      <Link href="/">
        <Image
          src="/images/logo.jpg"
          width={100}
          height={100}
          priority={true}
          alt="logo of brand"
        />
      </Link>
      {!navOpen && (
        <button
          className="md:hidden text-slate-700"
          onClick={() => setNavOpen(true)}
        >
          =
        </button>
      )}

      <nav className="md:visible hidden text-slate-700 md:flex flex-row  justify-center gap-[3%] pb-3 items-end w-full">
        <NavBar />
      </nav>
    </div>
  );
}
