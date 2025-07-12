import Button from "../components/elements/button";

export const PopularCategories = () => {
  const categories = [
    {
      name: "Matematik",
      count: "2,500+ not",
      color: "bg-primary/5 border-primary/20 hover:bg-primary/10",
    },
    {
      name: "Fizik",
      count: "1,800+ not",
      color: "bg-book-blue/10 border-book-blue/20 hover:bg-book-blue/15",
    },
    {
      name: "Kimya",
      count: "1,200+ not",
      color: "bg-book-green/10 border-book-green/20 hover:bg-book-green/15",
    },
    {
      name: "Bilgisayar",
      count: "3,000+ not",
      color: "bg-secondary/5 border-secondary/20 hover:bg-secondary/10",
    },
    {
      name: "İngilizce",
      count: "900+ not",
      color: "bg-book-gold/10 border-book-gold/20 hover:bg-book-gold/15",
    },
    {
      name: "Edebiyat",
      count: "700+ not",
      color: "bg-destructive/10 border-destructive/20 hover:bg-destructive/15",
    },
    {
      name: "Tarih",
      count: "600+ not",
      color:
        "bg-book-burgundy/10 border-book-burgundy/20 hover:bg-book-burgundy/15",
    },
    {
      name: "Coğrafya",
      count: "400+ not",
      color: "bg-sage/20 border-sage/30 hover:bg-sage/25",
    },
  ];

  return (
    <section className="py-20 bg-parchment">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-heading mb-6">
            Popüler Kategoriler
          </h2>
          <p className="text-xl text-heading/70 max-w-2xl mx-auto">
            Her alanda uzman öğretmenlerden kaliteli ders notları
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 border`}
            >
              <h3 className="font-semibold text-heading mb-2 text-lg">
                {category.name}
              </h3>
              <p className="text-sm text-heading/60 font-medium">
                {category.count}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="primary">
            Tüm Kategorileri Görüntüle
          </Button>
        </div>
      </div>
    </section>
  );
};
