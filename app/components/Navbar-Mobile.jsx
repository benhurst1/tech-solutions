import NavBar from "./Navbar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavbarMobile({ setNavOpen, navOpen }) {
  const pathname = usePathname();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <div
      className={`fixed bg-slate-700 transform-all duration-300 z-20 h-screen w-full overflow-hidden ${
        navOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="md:hidden text-white right-0 top-0 absolute p-5"
        onClick={() => setNavOpen(false)}
      >
        X
      </button>
      <nav className={`flex flex-col gap-5 items-center pt-20`}>
        <NavBar />
      </nav>
    </div>
  );
}
