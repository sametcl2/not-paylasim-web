import { CategoryData } from "../mocks/CategoryMock";

export const Categories = () => {
  return (
    <section className="container max-w-6x mt-12">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-2xl font-bold">Öne Çıkan Kategoriler</h2>
        <p>Tümünü gör</p>
      </div>
      <div className="m-4 flex flex-row overflow-x-auto">
        {CategoryData.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex flex-col justify-center items-center gap-2 mr-8 rounded-lg shadow-md flex-none w-32 h-32 ${item.color} `}
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.itemCount} not</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
