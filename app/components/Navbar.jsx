import Link from "next/link";

export default function NavBar() {
  const links = [
    { id: 0, text: "Home", route: "/" },
    { id: 1, text: "About Us", route: "/about_us" },
    { id: 2, text: "Services", route: "/services" },
    { id: 3, text: "Contact", route: "/contact" },
  ];

  return links.map((link) => (
    <Link
      key={link.id}
      href={link.route}
      className="border border-slate-400 w-[100px] h-[30px] flex justify-center items-center rounded-xl transform-all hover:scale-105 duration-300 hover:backdrop-brightness-95"
    >
      {link.text}
    </Link>
  ));
}
