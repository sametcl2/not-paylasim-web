import {
  Hero,
  FeaturedNotes,
  Features,
  HowItWorks,
  PopularCategories,
  Testimonials,
  CTA,
  Footer,
} from "@/sections";

export const Home = () => {
  return (
    <main>
      <div id="hero" className="px-4 md:px-20 py-12">
        <Hero />
      </div>
      <Features />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <FeaturedNotes />
      <div id="categories">
        <PopularCategories />
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};
