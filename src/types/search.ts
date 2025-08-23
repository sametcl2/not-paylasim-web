// Search filter and sort types
export enum SortBy {
  NEWEST = "newest",
  OLDEST = "oldest",
  RATING = "rating",
  DOWNLOADS = "downloads",
  PRICE_LOW = "price-low",
  PRICE_HIGH = "price-high",
}

// Sort option display labels
export const SORT_OPTIONS = [
  { value: SortBy.NEWEST, label: "En Yeni" },
  { value: SortBy.OLDEST, label: "En Eski" },
  { value: SortBy.RATING, label: "En Yüksek Puan" },
  { value: SortBy.DOWNLOADS, label: "En Çok İndirilen" },
  { value: SortBy.PRICE_LOW, label: "Fiyat (Düşük)" },
  { value: SortBy.PRICE_HIGH, label: "Fiyat (Yüksek)" },
];
