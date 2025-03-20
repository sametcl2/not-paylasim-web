import { CategoryData } from "../mocks/CategoryMock";
import { SectionHeader } from "./SectionHeader";
import { SmallCard } from "./SmallCard";

export const Categories = () => {
  return (
    <section className="container max-w-6x mt-12">
      <SectionHeader
        title="Öne Çıkan Dersler"
        seeAllText="Tümünü Gör"
        onSeeAllClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="m-4 flex flex-row overflow-x-auto gap-4">
        {CategoryData.map((item) => {
          return <SmallCard {...item} />;
        })}
      </div>
    </section>
  );
};
