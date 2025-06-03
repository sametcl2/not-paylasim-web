import { DetailedCard } from "../DetailedCard";
import { NoteData } from "@/mocks/NoteMock";
import Button from "@/components/elements/button";

export const Categories = () => {
  return (
    <section className="max-w-6x bg-heading p-20">
      <div className="flex justify-between items-center px-4 mb-12">
        <h2 className="text-4xl font-bold text-white">Öne Çıkan Notlar</h2>
        <Button>Kayıt ol</Button>
      </div>
      <div className="m-4 flex justify-between overflow-x-auto gap-12">
        {NoteData.map((item) => {
          return <DetailedCard {...item} />;
        })}
      </div>
    </section>
  );
};
