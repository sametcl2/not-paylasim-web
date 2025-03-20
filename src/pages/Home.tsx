import { Categories } from "@/components/Categories";
import { Classes } from "@/components/Classes";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";

export const Home = () => {
  return (
    <div className="container md:px-4 md:py-8">
      <Header />
      <Hero />
      <Categories />
      <Classes />
    </div>
  );
};
