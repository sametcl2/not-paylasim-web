import { Search as SearchIcon } from "lucide-react";

interface SearchNoResultsProps {
  onResetFilters: () => void;
}

export const SearchNoResults: React.FC<SearchNoResultsProps> = ({
  onResetFilters,
}) => (
  <div className="text-center py-24">
    <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
      <SearchIcon className="w-16 h-16 text-primary" />
    </div>
    <h3 className="text-3xl font-bold text-heading mb-4">Sonuç bulunamadı</h3>
    <p className="text-xl text-heading/60 mb-8 max-w-md mx-auto">
      Arama kriterlerinize uygun not bulunamadı. Lütfen filtrelerinizi kontrol
      edin.
    </p>
    <button
      onClick={onResetFilters}
      className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
    >
      Filtreleri Temizle
    </button>
  </div>
);
