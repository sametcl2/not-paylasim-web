import { useLazySearchNoteQuery } from "@/services/search/searchNote";
import { selectNotes } from "@/store/note";
import { useSelector } from "@/store/setup/hooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const [searchNoteQuery, { isError }] = useLazySearchNoteQuery();
  const notes = useSelector(selectNotes);

  const handleSearch = async () => {
    if (keyword) {
      await searchNoteQuery(keyword);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [keyword]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Arama Sonuçları</h1>
      {isError && (
        <div className="text-red-500 mb-4">
          Arama sırasında bir hata oluştu. Lütfen tekrar deneyin.
        </div>
      )}
      {notes && notes.length === 0 && (
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
