import { SearchBar } from "@/components/SearchBar";
import { Search as SearchIcon } from "lucide-react";

interface SearchFilterCardProps {
  onSearch: (searchKeyword: string) => void;
}

export const SearchFilterCard: React.FC<SearchFilterCardProps> = ({
  onSearch,
}) => (
  <div className="max-w-6xl mx-auto mb-12">
    <div className="bg-white backdrop-blur-sm rounded-2xl border border-accent/20 shadow-2xl overflow-hidden">
      <div className="bg-primary/5 p-8 border-b border-accent/10">
        <h2 className="text-2xl font-semibold text-heading flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <SearchIcon className="w-4 h-4 text-primary" />
          </div>
          Arama ve Filtreler
        </h2>
        <p className="text-heading/60 mt-2">İhtiyacınıza uygun notları bulun</p>
      </div>

      <div className="p-8">
        <SearchBar onSearch={onSearch} showFilters={true} />
      </div>
    </div>
  </div>
);
