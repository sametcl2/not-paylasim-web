import { useState, useMemo } from "react";
import { Filter, Search } from "lucide-react";
import { NoteData } from "@/mocks/NoteMock";
import { NoteCard } from "@/components/NoteCard";

export const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearchTerm, setActiveSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [sortBy, setSortBy] = useState("newest");

  // Get unique categories
  const categories = [
    "Tümü",
    ...Array.from(new Set(NoteData.map((note) => note.category))),
  ];

  // Handle search
  const handleSearch = () => {
    setActiveSearchTerm(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Filter and sort notes
  const filteredNotes = useMemo(() => {
    let filtered = NoteData.filter((note) => {
      const matchesSearch =
        activeSearchTerm === "" ||
        note.title.toLowerCase().includes(activeSearchTerm.toLowerCase()) ||
        note.description
          .toLowerCase()
          .includes(activeSearchTerm.toLowerCase()) ||
        note.author.toLowerCase().includes(activeSearchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "Tümü" || note.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Sort notes
    switch (sortBy) {
      case "newest":
        return filtered.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      case "oldest":
        return filtered.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      case "rating":
        return filtered.sort((a, b) => b.rate - a.rate);
      case "downloads":
        return filtered.sort((a, b) => b.downloadCount - a.downloadCount);
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price);
      default:
        return filtered;
    }
  }, [activeSearchTerm, selectedCategory, sortBy]);

  return (
    <main className="min-h-screen bg-parchment">
      <div className="container mx-auto px-4 md:px-20 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-heading mb-4">Ders Notları</h1>
          <p className="text-lg text-heading/70">
            Kaliteli ders notlarını keşfedin ve başarınızı artırın
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg p-6 mb-8 border border-accent/20">
          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-heading/40" />
              <input
                type="text"
                placeholder="Not başlığı, açıklama veya yazar adı ile ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-12 pr-4 py-3 border border-accent/30 rounded-lg focus:border-primary focus:outline-none text-heading"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Ara
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-heading/60" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-accent/30 rounded-lg focus:border-primary focus:outline-none text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-heading/60">Sırala:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-accent/30 rounded-lg focus:border-primary focus:outline-none text-sm"
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

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-heading/70">
            <span className="font-medium text-primary">
              {filteredNotes.length}
            </span>{" "}
            not bulundu
          </p>
        </div>

        {/* Notes Grid */}
        {filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-heading mb-4">
              Sonuç bulunamadı
            </h3>
            <p className="text-heading/60 mb-6">
              Arama kriterlerinize uygun not bulunamadı. Lütfen filtrelerinizi
              kontrol edin.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveSearchTerm("");
                setSelectedCategory("Tümü");
                setSortBy("newest");
              }}
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
