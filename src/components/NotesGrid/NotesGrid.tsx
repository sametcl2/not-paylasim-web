import { NoteCard } from "@/components/NoteCard";
import { Note } from "@/types/note";

interface NotesGridProps {
  notes: Note[];
  isGeneral?: boolean;
}

export const NotesGrid: React.FC<NotesGridProps> = ({ notes, isGeneral }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {isGeneral && (
      <div className="col-span-full text-left mb-6">
        <h2 className="text-2xl font-semibold text-heading">
          Öne Çıkan Notlar
        </h2>
      </div>
    )}
    {notes.map((note) => (
      <NoteCard key={note._id} note={note} />
    ))}
  </div>
);
