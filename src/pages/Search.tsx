import { NotesGrid } from "@/components/NotesGrid";
import { SearchFilterCard } from "@/components/SearchFilterCard";
import { SearchLoading } from "@/components/SearchLoading";
import { SearchNoResults } from "@/components/SearchNoResults";
import { useSearchState } from "@/hooks/useSearchState";
import { useLazySearchNoteQuery } from "@/services/note/searchNote";
import { useCallback, useEffect, useMemo } from "react";

export const Search = () => {
  const [searchNoteQuery, { data: notesData, isLoading }] =
    useLazySearchNoteQuery();

  const { searchTerm, setSearchTerm, updateUrlParams, resetFilters } =
    useSearchState({ notesData });

  const searchParams = useMemo(() => {
    const params: Record<string, string> = {};
    if (searchTerm) params.keyword = searchTerm;
    return params;
  }, [searchTerm]);

  const handleSearch = useCallback(() => {
    updateUrlParams(searchParams);
    const queryString = new URLSearchParams(searchParams).toString();
    searchNoteQuery(queryString);
  }, [searchParams, updateUrlParams, searchNoteQuery]);

  const handleSubmit = useCallback(
    (searchKeyword: string) => {
      const trimmedKeyword = searchKeyword.trim().toLowerCase();
      setSearchTerm(trimmedKeyword);
    },
    [setSearchTerm]
  );

  const handleResetFilters = useCallback(() => {
    resetFilters();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    } else if (!searchTerm) {
      searchNoteQuery(searchTerm);
    }
  }, [searchTerm]);

  const renderContent = () => {
    if (isLoading) {
      return <SearchLoading />;
    }

    if (notesData?.data && notesData.data.length > 0) {
      return <NotesGrid isGeneral notes={notesData.data} />;
    }

    if (notesData && notesData.data.length === 0) {
      return <SearchNoResults onResetFilters={handleResetFilters} />;
    }

    return null;
  };

  return (
    <main className="min-h-screen bg-parchment">
      <div className="container mx-auto px-4 md:px-20 py-12">
        <SearchFilterCard onSearch={handleSubmit} />
        {renderContent()}
      </div>
    </main>
  );
};
