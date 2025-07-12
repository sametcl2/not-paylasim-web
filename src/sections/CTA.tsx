export const CTA = () => {
  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M30 30h40v40H30V30zm20 10l15-15v30l-15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bilginin Gücünü
            <span className="block text-book-gold">Keşfet!</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Binlerce öğrenci gibi sen de not kütüphanemize katıl, <br />
            bilgini paylaş ve aylık{" "}
            <strong className="text-book-gold">₺2000'e</strong> kadar kazan
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            <button className="bg-book-gold text-heading px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              Ücretsiz Kayıt Ol
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary transition-all">
              Notları Keşfet
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-book-gold rounded-full"></span>
              Ücretsiz üyelik
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-book-gold rounded-full"></span>
              Güvenli ödeme
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-book-gold rounded-full"></span>
              Anında erişim
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
