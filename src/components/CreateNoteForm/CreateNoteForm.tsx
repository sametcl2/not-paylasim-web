import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useRef } from "react";
import {
  Upload,
  X,
  Plus,
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
import {
  HelperText,
  TextInput,
  TextArea,
} from "@/components/elements/text-input";
import {
  defaultValues,
  CreateNoteFields,
  createNoteFormSchema,
  CreateNoteFormData,
} from "./createNoteFormHelper";

interface CreateNoteFormProps {
  onSubmit: (data: CreateNoteFormData) => Promise<void>;
  isLoading: boolean;
}

export const CreateNoteForm = ({
  onSubmit,
  isLoading,
}: CreateNoteFormProps) => {
  const navigate = useNavigate();
  const [currentTag, setCurrentTag] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    formState: { errors },
    handleSubmit,
    register: registerField,
    watch,
    setValue,
    getValues,
  } = useForm<z.infer<typeof createNoteFormSchema>>({
    resolver: zodResolver(createNoteFormSchema),
    defaultValues,
  });

  const watchedTags = watch(CreateNoteFields.Tags);
  const watchedImageUrls = watch(CreateNoteFields.ImageUrls);

  const handleAddTag = () => {
    const currentTags = getValues(CreateNoteFields.Tags);
    if (currentTag.trim() && !currentTags.includes(currentTag.trim())) {
      setValue(CreateNoteFields.Tags, [...currentTags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const currentTags = getValues(CreateNoteFields.Tags);
    setValue(
      CreateNoteFields.Tags,
      currentTags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImageUrls = Array.from(files).map(
        (_, index) => `uploaded-image-${Date.now()}-${index}.jpg`
      );
      const currentImages = getValues(CreateNoteFields.ImageUrls);
      setValue(CreateNoteFields.ImageUrls, [...currentImages, ...newImageUrls]);
    }
  };

  const handleRemoveImage = (imageToRemove: string) => {
    const currentImages = getValues(CreateNoteFields.ImageUrls);
    setValue(
      CreateNoteFields.ImageUrls,
      currentImages.filter((url) => url !== imageToRemove)
    );
  };

  async function handleFormSubmit(
    values: z.infer<typeof createNoteFormSchema>
  ) {
    await onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                color={errors[CreateNoteFields.Title] ? "error" : "gray"}
                {...registerField(CreateNoteFields.Title)}
                className="w-full pl-4 group-hover:border-primary/50 transition-colors"
              />
              {errors[CreateNoteFields.Title] && (
                <HelperText color="error">
                  {errors[CreateNoteFields.Title].message}
                </HelperText>
              )}
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
            <TextArea
              placeholder="Notunuz hakkında detaylı açıklama yazın..."
              {...registerField(CreateNoteFields.Description)}
              rows={5}
              color={errors[CreateNoteFields.Description] ? "error" : "gray"}
              className="group-hover:border-primary/50 transition-colors"
            />
            {errors[CreateNoteFields.Description] && (
              <HelperText color="error">
                {errors[CreateNoteFields.Description].message}
              </HelperText>
            )}
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
              color={errors[CreateNoteFields.CourseName] ? "error" : "gray"}
              {...registerField(CreateNoteFields.CourseName)}
              className="w-full group-hover:border-primary/50 transition-colors"
            />
            {errors[CreateNoteFields.CourseName] && (
              <HelperText color="error">
                {errors[CreateNoteFields.CourseName].message}
              </HelperText>
            )}
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
              color={errors[CreateNoteFields.University] ? "error" : "gray"}
              {...registerField(CreateNoteFields.University)}
              className="w-full group-hover:border-primary/50 transition-colors"
            />
            {errors[CreateNoteFields.University] && (
              <HelperText color="error">
                {errors[CreateNoteFields.University].message}
              </HelperText>
            )}
          </div>

          {/* Öğretim Üyesi */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
              <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                <User className="w-3 h-3 text-primary" />
              </div>
              Öğretim Üyesi *
            </label>
            <TextInput
              type="text"
              placeholder="Prof. Dr. Adı Soyadı"
              color={errors[CreateNoteFields.Professor] ? "error" : "gray"}
              {...registerField(CreateNoteFields.Professor)}
              className="w-full group-hover:border-primary/50 transition-colors"
            />
            {errors[CreateNoteFields.Professor] && (
              <HelperText color="error">
                {errors[CreateNoteFields.Professor].message}
              </HelperText>
            )}
          </div>

          {/* Sayfa Sayısı */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
              <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                <Hash className="w-3 h-3 text-primary" />
              </div>
              Sayfa Sayısı *
            </label>
            <TextInput
              type="number"
              min="1"
              placeholder="Notun toplam sayfa sayısı"
              color={errors[CreateNoteFields.PageCount] ? "error" : "gray"}
              {...registerField(CreateNoteFields.PageCount, {
                valueAsNumber: true,
              })}
              className="w-full group-hover:border-primary/50 transition-colors"
            />
            {errors[CreateNoteFields.PageCount] && (
              <HelperText color="error">
                {errors[CreateNoteFields.PageCount].message}
              </HelperText>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {/* Etiketler */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
              <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                <Hash className="w-3 h-3 text-primary" />
              </div>
              Etiketler *
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
                {watchedTags.map((tag, index) => (
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
              {errors[CreateNoteFields.Tags] && (
                <HelperText color="error">
                  {errors[CreateNoteFields.Tags].message}
                </HelperText>
              )}
            </div>
          </div>
          {/* Seçenekler */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
              <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-primary" />
              </div>
              Yayınlama Seçenekleri *
            </label>
            <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
              <div className="space-y-4">
                <label className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    value="true"
                    checked={watch(CreateNoteFields.IsPaid) === true}
                    onChange={() => setValue(CreateNoteFields.IsPaid, true)}
                    className="w-5 h-5 text-primary border-2 border-accent/30 focus:ring-primary focus:ring-2"
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
                    type="radio"
                    value="false"
                    checked={watch(CreateNoteFields.IsPaid) === false}
                    onChange={() => setValue(CreateNoteFields.IsPaid, false)}
                    className="w-5 h-5 text-primary border-2 border-accent/30 focus:ring-primary focus:ring-2"
                  />
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-heading">
                      Ücretsiz not
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/* Fiyat */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
              <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                <DollarSign className="w-3 h-3 text-primary" />
              </div>
              Fiyat (₺) *
            </label>
            <TextInput
              type="number"
              min="1"
              step="0.01"
              placeholder="1.00"
              color={errors[CreateNoteFields.Price] ? "error" : "gray"}
              {...registerField(CreateNoteFields.Price, {
                valueAsNumber: true,
              })}
              className="w-full group-hover:border-primary/50 transition-colors"
            />
            {errors[CreateNoteFields.Price] && (
              <HelperText color="error">
                {errors[CreateNoteFields.Price].message}
              </HelperText>
            )}
          </div>{" "}
          {/* Görseller */}
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-medium text-heading mb-3">
              <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                <FileImage className="w-3 h-3 text-primary" />
              </div>
              Not Görselleri *
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

              {watchedImageUrls.length > 0 && (
                <div className="grid grid-cols-2 gap-3 animate-in fade-in duration-300">
                  {watchedImageUrls.map((url, index) => (
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
              {errors[CreateNoteFields.ImageUrls] && (
                <HelperText color="error">
                  {errors[CreateNoteFields.ImageUrls].message}
                </HelperText>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="bg-accent/5 p-6 border-t border-accent/10 mt-8">
        <div className="flex justify-end items-center">
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
              isLoading={isLoading}
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {isLoading ? "Kaydediliyor..." : "Notu Kaydet"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
