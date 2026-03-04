import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <HowItWorks />
      <Features />
      <FAQ />
    </div>
  );
}
