import { BookOpen, Users, DollarSign, Library } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-20 bg-light relative overflow-hidden">
      {/* Book-inspired decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="currentColor" />
          <path
            d="M25,30 L75,30 M25,40 L70,40 M25,50 L75,50 M25,60 L65,60"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5 rotate-12">
        <BookOpen className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Library className="w-4 h-4" />
            Neden Bizi Tercih Edin?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4 leading-tight">
            Bilginin Gücünü <span className="text-primary">Keşfedin</span>
          </h2>
          <p className="text-lg text-heading/70 max-w-2xl mx-auto">
            Öğrenciler için tasarlanmış en kapsamlı not paylaşım kütüphanesi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform"></div>
            <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-heading">
              Kaliteli Notlar
            </h3>
            <p className="text-heading/70 leading-relaxed">
              Uzmanlar ve başarılı öğrenciler tarafından hazırlanmış, titizlikle
              seçilmiş notlara erişin. Her not kalite kontrolünden geçer.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform"></div>
            <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-heading">
              Ek Gelir Kapısı
            </h3>
            <p className="text-heading/70 leading-relaxed">
              Notlarınızı paylaşarak aylık 500-2000 TL ek gelir elde edin.
              Bilginizi paraya dönüştürün!
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-book-green/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform"></div>
            <div className="bg-book-green w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-heading">
              Güçlü Topluluk
            </h3>
            <p className="text-heading/70 leading-relaxed">
              50,000+ öğrencinin yer aldığı aktif toplulukta bilgi paylaşın,
              network kurun ve birlikte büyüyün.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
