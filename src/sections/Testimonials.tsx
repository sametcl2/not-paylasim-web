import { BookOpen, Scroll, Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayşe Yılmaz",
      university: "İTÜ - Bilgisayar Mühendisliği",
      text: "Calculus notlarımı paylaştım ve ilk ayda 800 TL kazandım. Hem kendi notlarımı düzenledim hem de ek gelir elde ettim.",
      rating: 5,
      avatar: "👩‍💻",
      earning: "₺800/ay",
    },
    {
      name: "Mehmet Kaya",
      university: "ODTÜ - Elektrik Mühendisliği",
      text: "Diferansiyel denklemler dersi için aldığım notlar sayesinde dersi geçtim. Kaliteli ve anlaşılır notlar.",
      rating: 5,
      avatar: "👨‍🔬",
      earning: "₺1200/ay",
    },
    {
      name: "Zeynep Demir",
      university: "Boğaziçi - İktisat",
      text: "Platform sayesinde hem notlarımı sattım hem de ihtiyacım olan notları buldum. Çok pratik ve güvenli.",
      rating: 5,
      avatar: "👩‍🎓",
      earning: "₺650/ay",
    },
  ];

  return (
    <section className="py-20 bg-parchment relative overflow-hidden">
      {/* Book decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-10 rotate-12">
        <BookOpen className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 right-10 w-16 h-16 opacity-10 -rotate-12">
        <Scroll className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 md:px-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-book-gold/10 text-book-gold px-6 py-3 rounded-full text-sm font-medium mb-6 border border-book-gold/20">
            <Star className="w-4 h-4" />
            Öğrenci Deneyimleri
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            💬 Başarı Hikayeleri
          </h2>
          <p className="text-lg text-heading/70">
            Öğrencilerimizin gerçek deneyimleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-book-gold/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform"></div>

              {/* Quote decoration */}
              <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif">
                "
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-book-gold fill-current"
                      />
                    ))}
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.earning}
                  </div>
                </div>

                <p className="text-heading/80 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-heading">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-heading/60">
                      {testimonial.university}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
