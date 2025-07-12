import { BookOpen, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router";
import { NoteCard } from "@/components/NoteCard";

export const FeaturedNotes = () => {
  const navigate = useNavigate();
  const featuredNotes = [
    {
      id: 1,
      title: "Diferansiyel Denklemler - Tam Kurs Notları",
      subject: "Matematik",
      professor: "Prof. Dr. Ahmet Yılmaz",
      university: "İTÜ",
      rating: 4.9,
      downloads: 1250,
      views: 3400,
      price: 45,
      preview: "📊",
      images: [
        "https://placehold.co/300x200/8B4513/FFFFFF?text=Sayfa+1+-+Diferansiyel+Denklemler",
        "https://placehold.co/300x200/D4AF37/FFFFFF?text=Sayfa+2+-+Çözüm+Örnekleri",
        "https://placehold.co/300x200/4A7C59/FFFFFF?text=Sayfa+3+-+Formüller",
      ],
      tags: ["Çözümlü Örnekler", "Final Hazırlık", "Detaylı Anlatım"],
    },
    {
      id: 2,
      title: "Fizik 1 - Mekanik Konuları",
      subject: "Fizik",
      professor: "Doç. Dr. Elif Kaya",
      university: "ODTÜ",
      rating: 4.8,
      downloads: 980,
      views: 2800,
      price: 35,
      preview: "⚛️",
      images: [
        "https://placehold.co/300x200/4A6FA5/FFFFFF?text=Sayfa+1+-+Mekanik+Giriş",
        "https://placehold.co/300x200/8B4513/FFFFFF?text=Sayfa+2+-+Hareket+Denklemleri",
        "https://placehold.co/300x200/654321/FFFFFF?text=Sayfa+3+-+Örnek+Çözümler",
      ],
      tags: ["Grafik Çözümler", "Formül Listesi", "Pratik Örnekler"],
    },
    {
      id: 3,
      title: "Organik Kimya - Reaksiyon Mekanizmaları",
      subject: "Kimya",
      professor: "Prof. Dr. Mehmet Demir",
      university: "Boğaziçi",
      rating: 4.7,
      downloads: 750,
      views: 2100,
      price: 50,
      preview: "🧪",
      images: [
        "https://placehold.co/300x200/8B2635/FFFFFF?text=Sayfa+1+-+Organik+Kimya",
        "https://placehold.co/300x200/D4AF37/FFFFFF?text=Sayfa+2+-+Reaksiyon+Şemaları",
        "https://placehold.co/300x200/87A96B/FFFFFF?text=Sayfa+3+-+3D+Modeller",
      ],
      tags: ["3D Modeller", "Reaksiyon Şemaları", "Lab Notları"],
    },
    {
      id: 4,
      title: "Algoritma ve Programlama",
      subject: "Bilgisayar",
      professor: "Dr. Ayşe Özkan",
      university: "Hacettepe",
      rating: 4.9,
      downloads: 1800,
      views: 4500,
      price: 40,
      preview: "💻",
      images: [
        "https://placehold.co/300x200/4A7C59/FFFFFF?text=Sayfa+1+-+Algoritma+Giriş",
        "https://placehold.co/300x200/4A6FA5/FFFFFF?text=Sayfa+2+-+Kod+Örnekleri",
        "https://placehold.co/300x200/8B4513/FFFFFF?text=Sayfa+3+-+Flowchart",
      ],
      tags: ["Kod Örnekleri", "Flowchart", "Python & Java"],
    },
    {
      id: 5,
      title: "Lineer Cebir - Matris İşlemleri",
      subject: "Matematik",
      professor: "Prof. Dr. Fatma Şen",
      university: "Bilkent",
      rating: 4.6,
      downloads: 650,
      views: 1900,
      price: 30,
      preview: "📐",
      images: [
        "https://placehold.co/300x200/D4AF37/FFFFFF?text=Sayfa+1+-+Matris+Giriş",
        "https://placehold.co/300x200/8B2635/FFFFFF?text=Sayfa+2+-+İşlemler",
        "https://placehold.co/300x200/654321/FFFFFF?text=Sayfa+3+-+Çözümler",
      ],
      tags: ["Çözüm Adımları", "Görsel Anlatım", "Sınav Soruları"],
    },
    {
      id: 6,
      title: "İngilizce Grammar - Complete Guide",
      subject: "İngilizce",
      professor: "Dr. John Smith",
      university: "Bilgi Üniversitesi",
      rating: 4.8,
      downloads: 1100,
      views: 3200,
      price: 25,
      preview: "🗣️",
      images: [
        "https://placehold.co/300x200/87A96B/FFFFFF?text=Sayfa+1+-+Grammar+Rules",
        "https://placehold.co/300x200/4A6FA5/FFFFFF?text=Sayfa+2+-+Practice+Tests",
        "https://placehold.co/300x200/8B4513/FFFFFF?text=Sayfa+3+-+Speaking+Tips",
      ],
      tags: ["Grammar Rules", "Practice Tests", "Speaking Tips"],
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-book-gold/10 text-book-gold px-6 py-3 rounded-full text-sm font-medium mb-6 border border-book-gold/20">
            <TrendingUp className="w-4 h-4" />
            En Popüler Notlar
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Öne Çıkan Ders Notları
          </h2>
          <p className="text-lg text-heading/70 max-w-2xl mx-auto">
            En çok beğenilen ve indirilen kaliteli ders notlarını keşfedin
          </p>
        </div>

        {/* Scrollable Notes Container */}
        <div className="relative">
          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-6 min-w-max px-4">
              {featuredNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  className="min-w-[320px] max-w-[320px] ml-2"
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/notes")}
            className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            <BookOpen className="w-5 h-5" />
            Tüm Notları Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
};
