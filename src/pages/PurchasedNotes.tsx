import { NotesGrid } from "@/components/NotesGrid";
import { Note } from "@/types/note";
import { CreditCard, ShoppingBag } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import Button from "@/components/elements/button";

export const PurchasedNotes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { purchasedNotes } = location.state || { purchasedNotes: [] };

  const handleBrowseNotes = () => {
    navigate("/search");
  };

  const totalSpent =
    purchasedNotes?.reduce(
      (total: number, note: Note) => total + (note.price || 0),
      0,
    ) || 0;

  return (
    <main className="min-h-screen bg-parchment">
      <div className="container mx-auto px-4 md:px-20 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-heading">
                  Satın Aldıklarım
                </h1>
                <p className="text-heading/70">
                  Satın aldığınız ders notlarını görüntüleyin
                </p>
              </div>
            </div>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={handleBrowseNotes}
            className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ShoppingBag className="w-5 h-5" />
            Notlara Göz At
          </Button>
        </div>

        <div className="bg-white rounded-2xl p-6 mb-8 border border-accent/20 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {purchasedNotes?.length || 0}
              </div>
              <div className="text-sm text-heading/60">Satın Alınan Not</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-book-green">
                ₺{totalSpent.toFixed(2)}
              </div>
              <div className="text-sm text-heading/60">Toplam Harcama</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-book-gold">
                ₺
                {purchasedNotes?.length > 0
                  ? (totalSpent / purchasedNotes.length).toFixed(2)
                  : "0.00"}
              </div>
              <div className="text-sm text-heading/60">Ortalama Fiyat</div>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        {purchasedNotes && purchasedNotes.length > 0 ? (
          <NotesGrid notes={purchasedNotes} isGeneral />
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-12 h-12 text-accent/40" />
            </div>
            <h3 className="text-2xl font-semibold text-heading mb-2">
              Henüz not satın almadınız
            </h3>
            <p className="text-heading/60 mb-6 max-w-md mx-auto">
              Kaliteli ders notlarını keşfedin ve akademik başarınızı artırın.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};
