import { BookOpen, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router";
import { NoteCard } from "@/components/NoteCard";
import { Note } from "@/types/note";

export const FeaturedNotes = () => {
  const navigate = useNavigate();
  const featuredNotes: Note[] = [
    {
      _id: "1",
      owner: {
        username: "user1",
        email: "user1@example.com",
        name: "John Doe"
      },
      title: "Diferansiyel Denklemler - Tam Kurs Notları",
      description:
        "Diferansiyel denklemleri kapsamlı bir şekilde anlatan ders notları",
      courseName: "Matematik",
      professor: "Prof. Dr. Ahmet Yılmaz",
      university: "İTÜ",
      rating: 4.9,
      ratingCount: 125,
      downloadCount: 1250,
      price: 45,
      isPaid: true,
      isActive: true,
      pageCount: 45,
      imageUrls: [
        "https://placehold.co/300x200/8B4513/FFFFFF?text=Sayfa+1+-+Diferansiyel+Denklemler",
        "https://placehold.co/300x200/D4AF37/FFFFFF?text=Sayfa+2+-+Çözüm+Örnekleri",
        "https://placehold.co/300x200/4A7C59/FFFFFF?text=Sayfa+3+-+Formüller",
      ],
      tags: ["Çözümlü Örnekler", "Final Hazırlık", "Detaylı Anlatım"],
      createdAt: "2024-01-15T10:30:00Z",
      updatedAt: "2024-01-15T10:30:00Z",
    },
    {
      _id: "2",
      owner: {
        username: "user2",
        email: "user2@example.com",
        name: "Jane Smith"
      },
      title: "Fizik 1 - Mekanik Konuları",
      description:
        "Fizik mekanik konularını detaylı bir şekilde anlatan ders notları",
      courseName: "Fizik",
      professor: "Doç. Dr. Elif Kaya",
      university: "ODTÜ",
      rating: 4.8,
      ratingCount: 98,
      downloadCount: 980,
      price: 35,
      isPaid: true,
      isActive: true,
      pageCount: 38,
      imageUrls: [
        "https://placehold.co/300x200/4A6FA5/FFFFFF?text=Sayfa+1+-+Mekanik+Giriş",
        "https://placehold.co/300x200/8B4513/FFFFFF?text=Sayfa+2+-+Hareket+Denklemleri",
        "https://placehold.co/300x200/654321/FFFFFF?text=Sayfa+3+-+Örnek+Çözümler",
      ],
      tags: ["Grafik Çözümler", "Formül Listesi", "Pratik Örnekler"],
      createdAt: "2024-01-20T14:15:00Z",
      updatedAt: "2024-01-20T14:15:00Z",
    },
    {
      _id: "3",
      owner: {
        username: "user3",
        email: "user3@example.com",
        name: "Mike Johnson"
      },
      title: "Organik Kimya - Reaksiyon Mekanizmaları",
      description:
        "Organik kimya reaksiyon mekanizmalarını detaylı anlatan notlar",
      courseName: "Kimya",
      professor: "Prof. Dr. Mehmet Demir",
      university: "Boğaziçi",
      rating: 4.7,
      ratingCount: 75,
      downloadCount: 750,
      price: 50,
      isPaid: true,
      isActive: true,
      pageCount: 52,
      imageUrls: [
        "https://placehold.co/300x200/8B2635/FFFFFF?text=Sayfa+1+-+Organik+Kimya",
        "https://placehold.co/300x200/D4AF37/FFFFFF?text=Sayfa+2+-+Reaksiyon+Şemaları",
        "https://placehold.co/300x200/87A96B/FFFFFF?text=Sayfa+3+-+3D+Modeller",
      ],
      tags: ["3D Modeller", "Reaksiyon Şemaları", "Lab Notları"],
      createdAt: "2024-02-01T09:20:00Z",
      updatedAt: "2024-02-01T09:20:00Z",
    },
    {
      _id: "4",
      owner: {
        username: "user4",
        email: "user4@example.com",
        name: "Sarah Wilson"
      },
      title: "Algoritma ve Programlama",
      description:
        "Algoritma ve programlama temellerini öğreten kapsamlı notlar",
      courseName: "Bilgisayar Mühendisliği",
      professor: "Dr. Ayşe Özkan",
      university: "Hacettepe",
      rating: 4.9,
      ratingCount: 180,
      downloadCount: 1800,
      price: 40,
      isPaid: true,
      isActive: true,
      pageCount: 65,
      imageUrls: [
        "https://placehold.co/300x200/4A7C59/FFFFFF?text=Sayfa+1+-+Algoritma+Giriş",
        "https://placehold.co/300x200/4A6FA5/FFFFFF?text=Sayfa+2+-+Kod+Örnekleri",
        "https://placehold.co/300x200/8B4513/FFFFFF?text=Sayfa+3+-+Flowchart",
      ],
      tags: ["Kod Örnekleri", "Flowchart", "Python & Java"],
      createdAt: "2024-01-10T16:45:00Z",
      updatedAt: "2024-01-10T16:45:00Z",
    },
    {
      _id: "5",
      owner: {
        username: "user5",
        email: "user5@example.com",
        name: "David Brown"
      },
      title: "Lineer Cebir - Matris İşlemleri",
      description: "Lineer cebir ve matris işlemlerini kapsayan detaylı notlar",
      courseName: "Matematik",
      professor: "Prof. Dr. Fatma Şen",
      university: "Bilkent",
      rating: 4.6,
      ratingCount: 65,
      downloadCount: 650,
      price: 30,
      isPaid: true,
      isActive: true,
      pageCount: 42,
      imageUrls: [
        "https://placehold.co/300x200/D4AF37/FFFFFF?text=Sayfa+1+-+Matris+Giriş",
        "https://placehold.co/300x200/8B2635/FFFFFF?text=Sayfa+2+-+İşlemler",
        "https://placehold.co/300x200/654321/FFFFFF?text=Sayfa+3+-+Çözümler",
      ],
      tags: ["Çözüm Adımları", "Görsel Anlatım", "Sınav Soruları"],
      createdAt: "2024-02-05T11:30:00Z",
      updatedAt: "2024-02-05T11:30:00Z",
    },
    {
      _id: "6",
      owner: {
        username: "user6",
        email: "user6@example.com",
        name: "Emily Davis"
      },
      title: "İngilizce Grammar - Complete Guide",
      description:
        "İngilizce dilbilgisi kurallarını kapsamlı şekilde anlatan rehber",
      courseName: "İngilizce",
      professor: "Dr. John Smith",
      university: "Bilgi Üniversitesi",
      rating: 4.8,
      ratingCount: 110,
      downloadCount: 1100,
      price: 25,
      isPaid: true,
      isActive: true,
      pageCount: 35,
      imageUrls: [
        "https://placehold.co/300x200/87A96B/FFFFFF?text=Sayfa+1+-+Grammar+Rules",
        "https://placehold.co/300x200/4A6FA5/FFFFFF?text=Sayfa+2+-+Practice+Tests",
        "https://placehold.co/300x200/8B4513/FFFFFF?text=Sayfa+3+-+Speaking+Tips",
      ],
      tags: ["Grammar Rules", "Practice Tests", "Speaking Tips"],
      createdAt: "2024-01-25T13:10:00Z",
      updatedAt: "2024-01-25T13:10:00Z",
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
                  key={note._id}
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
