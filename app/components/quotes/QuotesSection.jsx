"use client";

import { useState } from "react";
import QuoteBlock from "./QuoteBlock";

export default function QuotesSection() {
  const [currentQuote, setCurrentQuote] = useState(0);

  function clickHandle(e) {
    if (e.target.id == "left-button") {
      if (currentQuote == 0) {
        setCurrentQuote(quotes.length - 1);
      } else {
        setCurrentQuote(currentQuote - 1);
      }
    } else {
      if (currentQuote == quotes.length - 1) {
        console.log("last one");
        setCurrentQuote(0);
      } else {
        setCurrentQuote(currentQuote + 1);
      }
    }
  }

  const quotes = [
    {
      id: 0,
      text: "Tech Solutions Hub has been instrumental in helping our company navigate the complexities of modern technology. Their expertise and dedication have been invaluable.",
      author: "John Doe, CEO, XYZ Corp",
    },
    {
      id: 1,
      text: "We've partnered with Tech Solutions Hub for several projects, and they consistently deliver exceptional results. Highly recommended!",
      author: "Jane Smith, CTO, ABC Inc.",
    },
  ];

  return (
    <div className="flex gap-5 justify-center w-full md:h-[200px] items-center py-10 bg-slate-200 md:px-[25%]">
      <svg
        id="left-button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        onClick={(e) => clickHandle(e)}
        className="h-10 cursor-pointer "
      >
        <title>chevron-left</title>
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg>

      <QuoteBlock
        quote={quotes[currentQuote].text}
        author={quotes[currentQuote].author}
      />
      <svg
        id="right-button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        onClick={(e) => clickHandle(e)}
        className="h-10 cursor-pointer"
      >
        <title>chevron-right</title>
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </div>
  );
}
