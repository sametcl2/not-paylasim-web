import HeroImage from "../assets/hero.jpg";
import { SearchBar } from "../components/SearchBar";

export const Hero = () => {
  return (
    <section className="container">
      <div className="m-4 px-4 py-8 bg-cyan-50 rounded-2xl">
        <h1 className="text-5xl tracking-tighter mb-4">
          Aradığın <strong>ders notlarını</strong> bul!
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          enim error optio laudantium
        </p>
        <SearchBar />
        <p className="text-sm text-gray-400">
          <strong className="text-black">Popüler aramalar: </strong>Diferansiyel
          denklemler, Fizik 1, Calculus, Lineer Cebir
        </p>
      </div>
      {/* <img src={HeroImage} /> */}
    </section>
  );
};
