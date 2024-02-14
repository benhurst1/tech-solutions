export default function FeaturesText({ title, body }) {
  return (
    <div className=" text-slate-700 relative w-full md:px-10 items-center">
      <p className="font-bold">{title}</p>
      <p>{body}</p>
    </div>
  );
}
