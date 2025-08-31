import { NotesGrid } from "@/components/NotesGrid";
import { Note } from "@/types/note";
import { BookOpen, Plus } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import Button from "@/components/elements/button";

export const OwnNotes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ownedNotes } = location.state || { ownedNotes: [] };

  const handleCreateNote = () => {
    navigate("/create-note");
  };

  return (
    <main className="min-h-screen bg-parchment">
      <div className="container mx-auto px-4 md:px-20 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-heading">
                  Notlarım
                </h1>
                <p className="text-heading/70">
                  Yüklediğiniz ders notlarını yönetin
                </p>
              </div>
            </div>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={handleCreateNote}
            className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Plus className="w-5 h-5" />
            Yeni Not Ekle
          </Button>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-8 border border-accent/20 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {ownedNotes?.length || 0}
              </div>
              <div className="text-sm text-heading/60">Toplam Not</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-book-green">
                {ownedNotes?.filter((note: Note) => !note.isPaid)?.length || 0}
              </div>
              <div className="text-sm text-heading/60">Ücretsiz Not</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-book-gold">
                {ownedNotes?.filter((note: Note) => note.isPaid)?.length || 0}
              </div>
              <div className="text-sm text-heading/60">Ücretli Not</div>
            </div>
          </div>
        </div>

        {ownedNotes && ownedNotes.length > 0 ? (
          <NotesGrid notes={ownedNotes} isGeneral />
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-accent/40" />
            </div>
            <h3 className="text-2xl font-semibold text-heading mb-2">
              Henüz not yüklemediniz
            </h3>
            <p className="text-heading/60 mb-6 max-w-md mx-auto">
              İlk notunuzu yükleyerek diğer öğrencilerle bilgi paylaşımına
              başlayın.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};
