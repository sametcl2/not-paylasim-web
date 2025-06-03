import { CategoryData } from "@/mocks/CategoryMock";
import { SmallCard } from "../SmallCard";
import Button from "@/components/elements/button";

export const Classes = () => {
  return (
    <section className="max-w-6x p-20">
      <div className="flex justify-between items-center px-4 mb-12">
        <h2 className="text-4xl font-bold">Dersleri Unutmayalım</h2>
        <Button>Kayıt ol</Button>
      </div>
      <div className="m-4 flex flex-row overflow-x-auto gap-4 mb-8">
        {CategoryData.map((item) => {
          return <SmallCard {...item} />;
        })}
      </div>
    </section>
  );
};
