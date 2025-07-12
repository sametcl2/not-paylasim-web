import { Scroll, BookOpen } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-parchment relative overflow-hidden">
      {/* Book pages decoration */}
      <div className="absolute top-0 left-1/4 w-32 h-32 opacity-5 rotate-12">
        <Scroll className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 opacity-5 -rotate-12">
        <BookOpen className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-secondary/20">
            <Scroll className="w-4 h-4" />
            Başlangıç Rehberi
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            📖 Nasıl Çalışır?
          </h2>
          <p className="text-lg text-heading/70 max-w-2xl mx-auto">
            3 basit adımda not kütüphanemize katıl
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="relative">
              <div className="bg-book-blue text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                1
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-book-gold rounded-full flex items-center justify-center">
                <span className="text-white text-xs">📝</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-heading">Kayıt Ol</h3>
            <p className="text-heading/70 leading-relaxed">
              Ücretsiz hesap oluştur ve binlerce kaliteli nota anında erişim
              sağla
            </p>
          </div>

          <div className="text-center group">
            <div className="relative">
              <div className="bg-secondary text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                2
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-book-green rounded-full flex items-center justify-center">
                <span className="text-white text-xs">🔍</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-heading">
              🔍 Notları Keşfet
            </h3>
            <p className="text-heading/70 leading-relaxed">
              İhtiyacın olan notları ara, incele ve güvenli ödeme ile satın al
            </p>
          </div>

          <div className="text-center group">
            <div className="relative">
              <div className="bg-destructive text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                3
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-book-gold rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💰</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-heading">
              Notlarını Paylaş
            </h3>
            <p className="text-heading/70 leading-relaxed">
              Kendi notlarını yükle, fiyatını belirle ve pasif gelir elde et
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
