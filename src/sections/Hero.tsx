import { SearchBar } from "../components/SearchBar";
import HeroImage from "../assets/hero-background.png";
import { useNavigate } from "react-router";

export const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?keyword=${query}`);
  };

  return (
    <section className="lg:h-screen">
      <div className="relative flex flex-col md:flex-row p-6 md:p-12 bg-white rounded-3xl shadow-2xl w-full">
        <div className="text-center md:text-left">
          <h1 className="mb-2 text-4xl md:text-6xl font-[600] tracking-tight text-heading">
            Aradığın notlar burada!
          </h1>
          <p className="text-md mb-8 text-heading">
            İstersen notlarını paylaş ek gelir kazan istersen notlardan faydalan
          </p>
          <SearchBar onSearch={handleSearch} />
          <p className="text-sm text-heading">
            <strong className="text-black">Popüler aramalar: </strong>
            Diferansiyel denklemler, Fizik 1, Calculus, Lineer Cebir
          </p>
        </div>
        <div className="mt-10 md:hidden">
          <div className="bg-red-950 w-full h-50 lg:150 rounded-2xl"></div>
          <div className="absolute -bottom-10 left-4 ">
            <img src={HeroImage} className="w-[400px] h-[300px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
