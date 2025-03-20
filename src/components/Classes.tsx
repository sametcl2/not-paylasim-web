import { NoteData } from "../mocks/NoteMock";
import { DetailedCard } from "./DetailedCard";
import { SectionHeader } from "./SectionHeader";

export const Classes = () => {
  return (
    <section className="container max-w-6x mt-12">
      <SectionHeader
        title="Öne Çıkan Notlar"
        seeAllText="Tümünü Gör"
        onSeeAllClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="m-4 flex flex-row overflow-x-auto gap-4">
        {NoteData.map((item) => {
          return <DetailedCard {...item} />;
        })}
      </div>
    </section>
  );
};
