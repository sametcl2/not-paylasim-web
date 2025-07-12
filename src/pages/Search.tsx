import { useLazySearchNoteQuery } from "@/services/note/searchNote";
import { selectNotes } from "@/store/note";
import { useSelector } from "@/store/setup/hooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const [searchNoteQuery, { isLoading }] = useLazySearchNoteQuery();

  const notes = useSelector(selectNotes);

  const handleSearch = async () => {
    if (keyword) {
      await searchNoteQuery(keyword);
    }
  };

  console.log({ notes, isLoading });

  useEffect(() => {
    handleSearch();
  }, [keyword]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Arama Sonuçları</h1>
      {isLoading && <div className="text-gray-500 mb-4">Yükleniyor...</div>}
      {!isLoading && notes.length === 0 && (
        <div className="text-gray-500">Arama sonuçları bulunamadı.</div>
      )}
      {notes && notes.length > 0 && (
        <ul className="space-y-4">
          {notes.map((note) => (
            <li key={note._id} className="p-4 border rounded-md">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p>{note.courseName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
