import { Search as SearchIcon } from "lucide-react";

interface SearchLoadingProps {}

export const SearchLoading: React.FC<SearchLoadingProps> = () => (
  <div className="text-center py-24">
    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
      <SearchIcon className="w-8 h-8 text-primary" />
    </div>
    <p className="text-xl text-heading/60 animate-pulse">Yükleniyor...</p>
  </div>
);
