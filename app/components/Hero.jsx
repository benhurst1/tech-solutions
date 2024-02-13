import Image from "next/image";

export default function Hero() {
  return (
    <div id="home-hero" className="relative h-[300px]">
      <Image
        className="object-cover blur-sm"
        src={"/images/hero.jpg"}
        fill={true}
        alt="People working at desk together"
        priority={true}
      />
      <div className="relative h-full flex flex-col md:px-[20%] md:items-start items-center justify-center drop-shadow-[0_3px_3px_rgba(0,0,0,1)]">
        <h1 className="md:text-5xl text-2xl">Welcome to Tech Solutions Hub</h1>
        <h2 className="md:text-2xl">
          Revolutionizing Tech Solutions for Businesses
        </h2>
      </div>
    </div>
  );
}
