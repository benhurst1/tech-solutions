import Link from "next/link";

export default function Page() {
  const content = [
    {
      id: 0,
      category: "Software Development",
      services: [
        {
          id: 0,
          title: "Mobile App Development",
          body: "Create engaging mobile experiences for your customers.",
        },
        {
          id: 1,
          title: "Custom Software Development",
          body: "Tailored solutions to meet your unique business needs.",
        },
      ],
    },
    {
      id: 1,
      category: "Cloud Solutions",
      services: [
        {
          id: 0,
          title: "Cloud Migration",
          body: "Seamlessly migrate your infrastructure to the cloud.",
        },
        {
          id: 1,
          title: "Custom Security",
          body: "Ensure the security of your cloud environment.",
        },
      ],
    },
  ];

  return (
    <div className="bg-slate-100 text-slate-700 h-screen w-full flex flex-col py-5 gap-10 items-center text-center">
      {content.map((item) => (
        <div className="flex flex-col gap-5" key={item.id}>
          <h2 className="text-xl font-bold ">{item.category}</h2>
          {item.services.map((service) => (
            <div key={service.id}>
              <p className="font-medium">{service.title}</p>
              <p>{service.body}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
