import { Search as SearchIcon } from "lucide-react";

interface SearchResultsHeaderProps {
  resultsCount: number;
  searchTerm?: string;
}

export const SearchResultsHeader: React.FC<SearchResultsHeaderProps> = ({
  resultsCount,
  searchTerm,
}) => (
  <div className="bg-white rounded-xl p-6 mb-8 border border-accent/20 shadow-lg">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
          <SearchIcon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-lg font-semibold text-heading">Arama Sonuçları</p>
          <p className="text-heading/70">
            <span className="font-semibold text-primary text-xl">
              {resultsCount}
            </span>{" "}
            not bulundu
          </p>
        </div>
      </div>
      {searchTerm && (
        <div className="text-sm text-heading/60 bg-accent/10 px-4 py-2 rounded-lg">
          "{searchTerm}" için sonuçlar
        </div>
      )}
    </div>
  </div>
);
