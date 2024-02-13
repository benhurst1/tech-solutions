import Hero from "./components/Hero";
import Features from "./components/features/Features";
import QuotesSection from "./components/quotes/QuotesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <QuotesSection />
    </main>
  );
}
