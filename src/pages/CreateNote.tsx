import { useState } from "react";
import { useNavigate } from "react-router";
import {
  CreateNoteForm,
  CreateNoteFormData,
} from "@/components/CreateNoteForm";

export const CreateNote = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: CreateNoteFormData) => {
    setIsSubmitting(true);

    try {
      console.log("Form data:", formData);

      // await createNote(formData);

      alert("Not başarıyla eklendi!");
      navigate("/profile");
    } catch (error) {
      console.error("Not eklenirken hata:", error);
      alert("Not eklenirken bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-parchment">
      <div className="container mx-auto px-4 md:px-20 py-12">
        {/* Main Form Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white backdrop-blur-sm rounded-2xl border border-accent/20 shadow-2xl overflow-hidden">
            <div className="bg-primary/5 p-8 border-b border-accent/10">
              <h2 className="text-2xl font-semibold text-heading flex items-center gap-3">
                Not Detayları
              </h2>
              <p className="text-heading/60 mt-2">
                Ders notunuzun detaylı bilgilerini girin
              </p>
            </div>
            <CreateNoteForm onSubmit={handleSubmit} isLoading={isSubmitting} />
          </div>
        </div>
      </div>
    </main>
  );
};
