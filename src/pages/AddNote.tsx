import { useState, useRef } from "react";
import {
  Upload,
  X,
  Plus,
  Save,
  BookOpen,
  GraduationCap,
  School,
  User,
  Hash,
  DollarSign,
  FileImage,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router";
import Button from "@/components/elements/button";
import { TextInput } from "@/components/elements/text-input";

export const AddNote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    courseName: "",
    university: "",
    professor: "",
    price: 0,
    isPaid: false,
    tags: [] as string[],
    imageUrls: [] as string[],
    pageCount: 0,
    isActive: true,
  });
  const [currentTag, setCurrentTag] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    field: string,
    value: string | number | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }));
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Burada dosya yükleme işlemi yapılacak
      // Şimdilik simüle ediyoruz
      const newImageUrls = Array.from(files).map(
        (_, index) => `uploaded-image-${Date.now()}-${index}.jpg`
      );
      setFormData((prev) => ({
        ...prev,
        imageUrls: [...prev.imageUrls, ...newImageUrls],
      }));
    }
  };

  const handleRemoveImage = (imageToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      imageUrls: prev.imageUrls.filter((url) => url !== imageToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // API çağrısı burada yapılacak
      console.log("Form data:", formData);

      // Başarılı mesajı ve yönlendirme
      alert("Not başarıyla eklendi!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Not eklenirken hata:", error);
      alert("Not eklenirken bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-parchment">
      {/* Hero Section */}
      <div className="bg-primary/5 border-b border-accent/10">
        <div className="container mx-auto px-4 md:px-20 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-heading mb-4">
              Yeni Not Ekle
            </h1>
            <p className="text-xl text-heading/70 mb-2">
              Ders notunuzu paylaşın ve diğer öğrencilere yardımcı olun
            </p>
            <p className="text-sm text-primary/80">
              Bilginizi paylaşarak akademik topluluğa katkıda bulunun
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 py-12">
        {/* Main Form Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white backdrop-blur-sm rounded-2xl border border-accent/20 shadow-2xl overflow-hidden">
            <div className="bg-primary/5 p-8 border-b border-accent/10">
              <h2 className="text-2xl font-semibold text-heading flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                Not Detayları
              </h2>
              <p className="text-heading/60 mt-2">
                Ders notunuzun detaylı bilgilerini girin
              </p>
            </div>
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Sol Kolon */}
                <div className="space-y-6">
                  {/* Not Başlığı */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
                      <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                        <BookOpen className="w-3 h-3 text-primary" />
                      </div>
                      Not Başlığı *
                    </label>
                    <div className="relative">
                      <TextInput
                        type="text"
                        placeholder="Ders notunuzun başlığını girin..."
                        value={formData.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                        required
                        className="w-full pl-4 group-hover:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Açıklama */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
                      <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                        <FileImage className="w-3 h-3 text-primary" />
                      </div>
                      Açıklama *
                    </label>
                    <textarea
                      placeholder="Notunuz hakkında detaylı açıklama yazın..."
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-accent/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 resize-none transition-all duration-200 group-hover:border-primary/50"
                    />
                  </div>

                  {/* Ders Adı */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
                      <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                        <GraduationCap className="w-3 h-3 text-primary" />
                      </div>
                      Ders Adı *
                    </label>
                    <TextInput
                      type="text"
                      placeholder="Matematik, Fizik, Kimya..."
                      value={formData.courseName}
                      onChange={(e) =>
                        handleInputChange("courseName", e.target.value)
                      }
                      required
                      className="w-full group-hover:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Üniversite */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
                      <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                        <School className="w-3 h-3 text-primary" />
                      </div>
                      Üniversite *
                    </label>
                    <TextInput
                      type="text"
                      placeholder="İTÜ, Boğaziçi, ODTÜ..."
                      value={formData.university}
                      onChange={(e) =>
                        handleInputChange("university", e.target.value)
                      }
                      required
                      className="w-full group-hover:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Öğretim Üyesi */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
                      <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                        <User className="w-3 h-3 text-primary" />
                      </div>
                      Öğretim Üyesi
                    </label>
                    <TextInput
                      type="text"
                      placeholder="Prof. Dr. Adı Soyadı"
                      value={formData.professor}
                      onChange={(e) =>
                        handleInputChange("professor", e.target.value)
                      }
                      className="w-full group-hover:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Sayfa Sayısı */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
                      <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                        <Hash className="w-3 h-3 text-primary" />
                      </div>
                      Sayfa Sayısı
                    </label>
                    <TextInput
                      type="number"
                      min="1"
                      placeholder="Notun toplam sayfa sayısı"
                      value={formData.pageCount}
                      onChange={(e) =>
                        handleInputChange(
                          "pageCount",
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="w-full group-hover:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Sağ Kolon */}
                <div className="space-y-6">
                  {/* Etiketler */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
                      <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                        <Hash className="w-3 h-3 text-primary" />
                      </div>
                      Etiketler
                    </label>
                    <div className="bg-primary/5 rounded-xl p-4 border border-accent/20">
                      <div className="flex gap-2 mb-3">
                        <TextInput
                          type="text"
                          placeholder="Etiket ekleyin..."
                          value={currentTag}
                          onChange={(e) => setCurrentTag(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleAddTag();
                            }
                          }}
                          className="flex-1"
                        />
                        <Button
                          type="button"
                          onClick={handleAddTag}
                          variant="primary"
                          size="sm"
                          className="shadow-lg hover:shadow-xl transition-shadow"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formData.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/15 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-all"
                          >
                            {tag}
                            <button
                              type="button"
                              onClick={() => handleRemoveTag(tag)}
                              className="hover:bg-primary/30 rounded-full p-0.5 transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Seçenekler */}
                  <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                    <h3 className="text-lg font-medium text-heading mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Yayınlama Seçenekleri
                    </h3>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.isPaid}
                          onChange={(e) =>
                            handleInputChange("isPaid", e.target.checked)
                          }
                          className="w-5 h-5 text-primary border-2 border-accent/30 rounded focus:ring-primary focus:ring-2"
                        />
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-heading">
                            Ücretli not
                          </span>
                        </div>
                      </label>

                      <label className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.isActive}
                          onChange={(e) =>
                            handleInputChange("isActive", e.target.checked)
                          }
                          className="w-5 h-5 text-primary border-2 border-accent/30 rounded focus:ring-primary focus:ring-2"
                        />
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-heading">
                            Aktif durumda yayınla
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Fiyat */}
                  {formData.isPaid && (
                    <div className="group animate-in slide-in-from-top-2 duration-300">
                      <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
                        <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                          <DollarSign className="w-3 h-3 text-primary" />
                        </div>
                        Fiyat (₺)
                      </label>
                      <TextInput
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        value={formData.price}
                        onChange={(e) =>
                          handleInputChange(
                            "price",
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="w-full group-hover:border-primary/50 transition-colors"
                      />
                    </div>
                  )}

                  {/* Görseller */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
                      <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                        <FileImage className="w-3 h-3 text-primary" />
                      </div>
                      Not Görselleri
                    </label>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-accent/30 rounded-xl p-8 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group-hover:border-primary/50">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleImageUpload}
                          multiple
                          accept="image/*"
                          className="hidden"
                        />
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Upload className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-sm font-medium text-heading mb-1">
                          Görsel yüklemek için tıklayın
                        </p>
                        <p className="text-xs text-heading/60 mb-4">
                          PNG, JPG, GIF (maks. 5MB)
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => fileInputRef.current?.click()}
                          className="shadow-sm hover:shadow-md transition-shadow"
                        >
                          Dosya Seç
                        </Button>
                      </div>

                      {formData.imageUrls.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 animate-in fade-in duration-300">
                          {formData.imageUrls.map((url, index) => (
                            <div key={index} className="relative group/image">
                              <div className="aspect-video bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20 hover:border-primary/30 transition-colors">
                                <span className="text-xs font-medium text-heading/70">
                                  Görsel {index + 1}
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(url)}
                                className="absolute -top-2 -right-2 bg-destructive hover:bg-destructive/90 text-white rounded-full p-1.5 opacity-0 group-hover/image:opacity-100 transition-all shadow-lg hover:shadow-xl"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="bg-accent/5 p-6 border-t border-accent/10 mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-heading/60">
                    Tüm gerekli alanları doldurduğunuzdan emin olun
                  </div>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => navigate(-1)}
                      className="hover:bg-accent/10 transition-colors"
                    >
                      İptal
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isLoading={isSubmitting}
                      className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Kaydediliyor..." : "Notu Kaydet"}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
