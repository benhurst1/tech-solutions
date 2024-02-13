export default function FeaturesText({ title, body }) {
  return (
    <div className="relative md:w-[25%] w-[80%] md:px-10">
      <p className="font-bold">{title}</p>
      <p>{body}</p>
    </div>
  );
}
