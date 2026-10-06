import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import Results from "@/components/Results";
import Location from "@/components/Location";
import Motion from "@/components/Motion";
import { Facts, About, Reviews, FinalCta, Footer, BookBar } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <Facts />
        <About />
        <Treatments />
        <Results />
        <Reviews />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <BookBar />
      <Motion />
    </>
  );
}
