import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { NoteData } from "@/mocks/NoteMock";
import Card from "@/components/elements/card";
import Carousel from "@/components/elements/carousel";
import Badge from "@/components/elements/badge";
import Button from "@/components/elements/button";
import {
  ArrowLeft,
  Star,
  Download,
  Eye,
  Share2,
  Calendar,
  User,
  BookOpen,
  Award,
  FileText,
  GraduationCap,
  Home,
  ChevronRight,
  ThumbsUp,
  ExternalLink,
  Bookmark,
  BookMarked,
} from "lucide-react";

type NoteType = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
  downloadCount: number;
  rate: number;
  commentCount: number;
  pageCount: number;
  price: number;
  university: string;
  professor: string;
  tags: string[];
  images: string[];
};

export const Note = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState<NoteType | null>(null);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (id) {
      // Simulate API call
      const foundNote = NoteData.find((n: NoteType) => n.id === parseInt(id));
      setNote(foundNote || null);
      setLoading(false);
    }
  }, [id]);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-heading/60">Not yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-24 h-24 text-heading/40 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-heading mb-4">
            Not bulunamadı
          </h1>
          <p className="text-heading/60 mb-6">
            Aradığınız not mevcut değil veya kaldırılmış olabilir.
          </p>
          <Button
            onClick={() => navigate("/notes")}
            className="inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Notlara Geri Dön
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero Section */}
      <div className="bg-white border-b border-accent/20">
        <div className="container mx-auto px-4 md:px-20 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-heading/60 mb-6">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-3 h-3" />
            <span>Notlar</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-heading font-medium truncate">
              {note.title}
            </span>
          </div>

          {/* Back Button */}
          <div className="mb-8">
            <Button
              outline
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Geri Dön
            </Button>
          </div>

          {/* Note Title & Meta */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge color="gray" size="md">
                  {note.category}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-current" />
                  <span className="text-sm font-medium text-heading">
                    {note.rate}
                  </span>
                  <span className="text-sm text-heading/60">
                    ({note.commentCount} değerlendirme)
                  </span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4 leading-tight">
                {note.title}
              </h1>

              <p className="text-lg text-heading/70 mb-6 max-w-3xl">
                {note.description}
              </p>

              {/* Author & Date */}
              <div className="flex flex-wrap items-center gap-6 text-heading/60">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{note.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{note.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{note.university}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[200px]">
              <Button className="inline-flex items-center gap-2 justify-center">
                <Download className="w-4 h-4" />
                Notu İndir
              </Button>
              <Button
                outline
                onClick={handleBookmark}
                className="inline-flex items-center gap-2 justify-center"
              >
                {isBookmarked ? (
                  <BookMarked className="w-4 h-4" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
                {isBookmarked ? "Kayıtlı" : "Kaydet"}
              </Button>
              <Button
                outline
                className="inline-flex items-center gap-2 justify-center"
              >
                <Share2 className="w-4 h-4" />
                Paylaş
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Content */}
          <div className="lg:col-span-3">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-200">
                <Eye className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-heading">
                  {note.downloadCount}
                </div>
                <div className="text-sm text-heading/60">Görüntülenme</div>
              </Card>
              <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-200">
                <Download className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-heading">
                  {note.downloadCount}
                </div>
                <div className="text-sm text-heading/60">İndirme</div>
              </Card>
              <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-200">
                <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-heading">
                  {note.pageCount}
                </div>
                <div className="text-sm text-heading/60">Sayfa</div>
              </Card>
              <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-200">
                <ThumbsUp className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-heading">
                  {note.commentCount}
                </div>
                <div className="text-sm text-heading/60">Beğeni</div>
              </Card>
            </div>

            {/* Image Carousel */}
            {note.images && note.images.length > 0 && (
              <Card className="mb-8">
                <div className="p-6 border-b border-accent/30">
                  <h3 className="text-2xl font-semibold text-heading flex items-center gap-2">
                    Not Görselleri - {`${note.images.length} Adet`}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="h-96 bg-accent/10 rounded-lg overflow-hidden">
                    <Carousel>
                      {note.images.map((image, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center h-full p-4"
                        >
                          <img
                            src={image}
                            alt={`${note.title} - ${index + 1}`}
                            className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </Card>
            )}

            {/* Note Content */}
            <Card className="mb-8">
              <div className="p-6 border-b border-accent/30">
                <h3 className="text-2xl font-semibold text-heading flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Not İçeriği
                </h3>
              </div>
              <div className="p-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-heading/80 leading-relaxed mb-6">
                    Bu not{" "}
                    <span className="font-semibold text-primary">
                      {note.category}
                    </span>{" "}
                    kategorisinde hazırlanmış kapsamlı bir çalışma materyalidir.{" "}
                    <span className="font-semibold">{note.author}</span>{" "}
                    tarafından özenle hazırlanmış bu içerik, konuyla ilgili
                    temel bilgilerden ileri düzey uygulamalara kadar geniş bir
                    yelpazede bilgi sunmaktadır.
                  </p>

                  <div className="bg-accent/20 p-6 rounded-lg mb-6 border border-accent/40">
                    <h4 className="text-xl font-semibold text-heading mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Notun Kapsamı
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-heading/80">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Temel kavramlar ve tanımlar
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Formüller ve kurallar
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Pratik örnekler ve çözümler
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Sınav odaklı sorular
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Konu özeti ve önemli noktalar
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Çözüm yöntemleri
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent/30 p-6 rounded-lg border-l-4 border-primary">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">💡</div>
                      <div>
                        <h5 className="font-semibold text-heading mb-2">
                          Önemli Not
                        </h5>
                        <p className="text-heading/80">
                          Bu notları kullanırken düzenli çalışma yapmanız ve
                          konuları tekrar etmeniz önerilmektedir. Başarılar
                          dileriz!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tags */}
            <Card>
              <div className="p-6 border-b border-accent/30">
                <h3 className="text-2xl font-semibold text-heading">
                  Etiketler
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      color="gray"
                      size="md"
                      className="cursor-pointer hover:bg-accent/20 transition-colors"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Note Details */}
            <Card>
              <div className="p-4 border-b border-accent/30">
                <h3 className="text-lg font-semibold text-heading">
                  Not Detayları
                </h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-heading/60">Kategori</span>
                  <Badge color="success" size="sm">
                    {note.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-heading/60">Yazar</span>
                  <span className="text-sm text-heading font-medium">
                    {note.author}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-heading/60">Üniversite</span>
                  <span className="text-sm text-heading">
                    {note.university}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-heading/60">Profesör</span>
                  <span className="text-sm text-heading">{note.professor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-heading/60">Tarih</span>
                  <span className="text-sm text-heading">{note.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-heading/60">Sayfa</span>
                  <span className="text-sm text-heading">{note.pageCount}</span>
                </div>
              </div>
            </Card>

            {/* Similar Notes */}
            <Card>
              <div className="p-4 border-b border-accent/30">
                <h3 className="text-lg font-semibold text-heading">
                  Benzer Notlar
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {NoteData.filter(
                  (n: (typeof NoteData)[0]) =>
                    n.category === note.category && n.id !== note.id
                )
                  .slice(0, 3)
                  .map((relatedNote: (typeof NoteData)[0]) => (
                    <div
                      key={relatedNote.id}
                      className="group cursor-pointer p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors duration-200"
                      onClick={() => navigate(`/note/${relatedNote.id}`)}
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={relatedNote.images[0]}
                          alt={relatedNote.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-heading text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedNote.title}
                          </h4>
                          <p className="text-xs text-heading/60 mb-2">
                            {relatedNote.author}
                          </p>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-accent fill-current" />
                            <span className="text-xs text-heading/60">
                              {relatedNote.rate}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-heading/40 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  ))}
              </div>
            </Card>

            {/* Call to Action */}
            <Card>
              <div className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-heading mb-2">
                  Daha Fazla Not
                </h3>
                <p className="text-sm text-heading/70 mb-4">
                  Binlerce kaliteli not ve kaynak keşfedin
                </p>
                <Button
                  outline
                  className="w-full"
                  onClick={() => navigate("/notes")}
                >
                  Tüm Notları Görüntüle
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
