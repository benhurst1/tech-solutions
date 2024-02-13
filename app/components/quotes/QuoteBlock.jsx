export default function QuoteBlock({ quote, author }) {
  return (
    <div className="w-[75%] h-[80%] text-slate-700 flex flex-col justify-between">
      <p>{quote}</p>
      <p className="text-right italic">{author}</p>
    </div>
  );
}
