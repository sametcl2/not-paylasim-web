import { Categories } from "@/components/Categories";
import { Classes } from "@/components/Classes";
import { Hero } from "@/sections/Hero";

export const Home = () => {
  return (
    <main className="px-20 pt-10">
      <Hero />
      <Categories />
      <Classes />
    </main>
  );
};
