import { NoteData } from "../mocks/NoteMock";

export const Classes = () => {
  return (
    <section className="container max-w-6x mt-12">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-2xl font-bold">Öne Çıkan Notlar</h2>
        <p>Tümünü gör</p>
      </div>
      <div className="m-4 flex flex-row overflow-x-auto">
        {NoteData.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-gray-100 mr-8 rounded-md shadow-md flex-none w-64"
            >
              <img src={item.image} className="w-full rounded-t-lg" />
              <div className="p-4">
                <div className="flex justify-between mb-4">
                  <div className="bg-amber-50 px-4 py-2 rounded-lg font-bold">
                    {item.category}
                  </div>
                  <div className="bg-amber-50 px-4 py-2 rounded-lg font-bold">
                    {item.price}
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm ">{`${item.pageCount} sayfa - ${item.rate} puan`}</p>
                <p className="text-sm text-gray-400 mt-4">
                  <strong>{item.author}</strong> - {item.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
