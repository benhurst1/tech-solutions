import FeaturesText from "./FeaturesText";
import Image from "next/image";

export default function Features() {
  const featuresContent = [
    {
      id: 0,
      title: "Streamlined Solutions:",
      body: "Our innovative approach simplifies complex tech challenges for businesses of all sizes.",
      imagePath: "/images/features_mindmap.png",
      alt: "Mindmap",
    },
    {
      id: 1,
      title: "Expert Guidance:",
      body: "Access expert advice and support from our team of seasoned tech professionals.",
      imagePath: "/images/features_support.png",
      alt: "Support on smartphone",
    },
    {
      id: 2,
      title: "Cutting-edge Technology:",
      body: "Stay ahead of the curve with our advanced technology solutions tailored to your needs.",
      imagePath: "/images/features_innovative.png",
      alt: "Drone race",
    },
  ];

  return (
    <div className="relative bg-slate-100 text-slate-700 flex flex-col gap-10 py-10">
      {featuresContent.map((feature) => (
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <FeaturesText
            key={feature.id}
            title={feature.title}
            body={feature.body}
          />
          <Image
            src={feature.imagePath}
            width={250}
            height={250}
            className="h-[200px] w-[250px] object-cover border border-slate-300 rounded-3xl"
            alt={feature.alt}
          />
        </div>
      ))}
    </div>
  );
}
