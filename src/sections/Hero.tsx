import { SearchBar } from "../components/SearchBar";
import HeroImage from "../assets/hero-background.png";
import { useNavigate } from "react-router";
import { GraduationCap, TrendingUp, Users } from "lucide-react";

export const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?keyword=${query}`);
  };

  return (
    <section className="lg:h-screen">
      <div className="relative flex flex-col md:flex-row p-8 md:p-12 bg-gradient-to-br from-white to-light rounded-3xl shadow-2xl w-full overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Türkiye'nin #1 Not Paylaşım Platformu
          </div>

          <h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight text-heading leading-tight">
            Aradığın notlar
            <span className="text-primary"> burada!</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-heading/70 max-w-xl">
            İstersen notlarını paylaş ek gelir kazan, istersen binlerce kaliteli
            nottan faydalan.
            <span className="font-semibold text-primary">
              {" "}
              50,000+ öğrenci{" "}
            </span>
            zaten aramızda!
          </p>

          <div className="mb-4">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="mb-6">
            <p className="text-sm text-heading/60">
              <strong className="text-heading">Popüler aramalar: </strong>
              <span className="inline-flex flex-wrap gap-2 mt-2">
                {[
                  "Diferansiyel Denklemler",
                  "Fizik 1",
                  "Calculus",
                  "Lineer Cebir",
                ].map((term, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(term)}
                    className="bg-accent text-heading px-3 py-1 rounded-full text-xs hover:bg-primary hover:text-white transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </span>
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm text-heading/70">
                <strong className="text-heading">50,000+</strong> Aktif Öğrenci
              </span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-secondary" />
              <span className="text-sm text-heading/70">
                <strong className="text-heading">10,000+</strong> Not Paylaşıldı
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-8 relative">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-full h-64 md:h-96 lg:h-[500px] rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            <img
              src={HeroImage}
              className="w-full h-full object-cover rounded-2xl"
              alt="Öğrenciler not paylaşırken"
            />

            {/* Floating cards */}
            <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-xs text-heading/60">Bu ay kazanılan</div>
              <div className="text-lg font-bold text-primary">₺12,500</div>
            </div>

            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-xs text-heading/60">Yeni notlar</div>
              <div className="text-lg font-bold text-secondary">+247</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
