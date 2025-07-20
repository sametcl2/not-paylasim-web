import { NoteCard } from "@/components/NoteCard";
import { NoteData } from "@/mocks/NoteMock";
import { useLazySearchNoteQuery } from "@/services/note/searchNote";
import { Filter, Search as SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [sortBy, setSortBy] = useState("newest");

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const [searchNoteQuery, { data: notesData, isLoading }] =
    useLazySearchNoteQuery();

  const handleSearch = async (keyword?: string) => {
    const termToSearch = keyword || searchTerm;
    await searchNoteQuery(termToSearch);
  };

  useEffect(() => {
    if (keyword) {
      setSearchTerm(keyword);
      handleSearch(keyword);
    }
  }, [keyword]);

  const categories = [
    "Tümü",
    ...Array.from(new Set(NoteData.map((note) => note.category))),
  ];

  // const filteredNotes = useMemo(() => {
  //   let filtered = NoteData.filter((note) => {
  //     const matchesSearch =
  //       activeSearchTerm === "" ||
  //       note.title.toLowerCase().includes(activeSearchTerm.toLowerCase()) ||
  //       note.description
  //         .toLowerCase()
  //         .includes(activeSearchTerm.toLowerCase()) ||
  //       note.author.toLowerCase().includes(activeSearchTerm.toLowerCase());
  //     const matchesCategory =
  //       selectedCategory === "Tümü" || note.category === selectedCategory;

  //     return matchesSearch && matchesCategory;
  //   });

  //   // Sort notes
  //   switch (sortBy) {
  //     case "newest":
  //       return filtered.sort(
  //         (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  //       );
  //     case "oldest":
  //       return filtered.sort(
  //         (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  //       );
  //     case "rating":
  //       return filtered.sort((a, b) => b.rate - a.rate);
  //     case "downloads":
  //       return filtered.sort((a, b) => b.downloadCount - a.downloadCount);
  //     case "price-low":
  //       return filtered.sort((a, b) => a.price - b.price);
  //     case "price-high":
  //       return filtered.sort((a, b) => b.price - a.price);
  //     default:
  //       return filtered;
  //   }
  // }, [activeSearchTerm, selectedCategory, sortBy]);

  const renderNoSearchResult = () => {
    return (
      notesData && (
        <div className="text-center py-24">
          <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <SearchIcon className="w-16 h-16 text-primary" />
          </div>
          <h3 className="text-3xl font-bold text-heading mb-4">
            Sonuç bulunamadı
          </h3>
          <p className="text-xl text-heading/60 mb-8 max-w-md mx-auto">
            Arama kriterlerinize uygun not bulunamadı. Lütfen filtrelerinizi
            kontrol edin.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("Tümü");
              setSortBy("newest");
            }}
            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Filtreleri Temizle
          </button>
        </div>
      )
    );
  };

  return (
    <main className="min-h-screen bg-parchment">
      {/* Hero Section */}
      <div className="bg-primary/5 border-b border-accent/10">
        <div className="container mx-auto px-4 md:px-20 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-heading mb-4">
              Ders Notları
            </h1>
            <p className="text-xl text-heading/70 mb-2">
              Kaliteli ders notlarını keşfedin ve başarınızı artırın
            </p>
            <p className="text-sm text-primary/80">
              Binlerce öğrencinin güvendiği kaliteli içerik
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 py-12">
        {/* Search & Filter Card */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white backdrop-blur-sm rounded-2xl border border-accent/20 shadow-2xl overflow-hidden">
            <div className="bg-primary/5 p-8 border-b border-accent/10">
              <h2 className="text-2xl font-semibold text-heading flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <SearchIcon className="w-4 h-4 text-primary" />
                </div>
                Arama ve Filtreler
              </h2>
              <p className="text-heading/60 mt-2">
                İhtiyacınıza uygun notları bulun
              </p>
            </div>

            <div className="p-8">
              {/* Search Bar */}
              <div className="flex gap-4 mb-8">
                <div className="relative flex-1 group">
                  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-heading/40 group-hover:text-primary/60 transition-colors" />
                  <input
                    type="text"
                    placeholder="Not başlığı, açıklama veya yazar adı ile ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch(searchTerm);
                      }
                    }}
                    className="w-full pl-12 pr-4 py-4 border border-accent/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 text-heading transition-all duration-200 group-hover:border-primary/50"
                  />
                </div>
                <button
                  onClick={() => handleSearch(searchTerm)}
                  className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                >
                  Ara
                </button>
              </div>

              {/* Filters */}
              <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                <div className="flex flex-wrap gap-6 items-center">
                  {/* Category Filter */}
                  <div className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Filter className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-heading block mb-1">
                        Kategori
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-2 border border-accent/30 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 text-sm transition-all duration-200 hover:border-primary/50"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Sort By */}
                  <div className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Filter className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-heading block mb-1">
                        Sırala
                      </label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 border border-accent/30 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 text-sm transition-all duration-200 hover:border-primary/50"
                      >
                        <option value="newest">En Yeni</option>
                        <option value="oldest">En Eski</option>
                        <option value="rating">En Yüksek Puan</option>
                        <option value="downloads">En Çok İndirilen</option>
                        <option value="price-low">Fiyat (Düşük)</option>
                        <option value="price-high">Fiyat (Yüksek)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
              <SearchIcon className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl text-heading/60 animate-pulse">
              Yükleniyor...
            </p>
          </div>
        )}

        {/* Results */}
        {notesData && notesData?.data.length > 0 ? (
          <>
            {/* Results Header */}
            <div className="bg-white rounded-xl p-6 mb-8 border border-accent/20 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <SearchIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-heading">
                      Arama Sonuçları
                    </p>
                    <p className="text-heading/70">
                      <span className="font-semibold text-primary text-xl">
                        {notesData?.data.length}
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

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {notesData?.data.map((note) => (
                <NoteCard key={note._id} note={note} />
              ))}
            </div>
          </>
        ) : (
          renderNoSearchResult()
        )}
      </div>
    </main>
  );
};
