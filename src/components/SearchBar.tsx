import { IoSearchSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white px-6 py-4 mb-4">
      <div className="flex flex-row items-center mb-4 md:mb-0 w-full">
        <IoSearchSharp size={24} className="text-gray-500 mr-2" />
        <input
          type="text"
          className="h-12 p-2 w-full mr-2"
          placeholder="Ders adı, okul adı, hoca adı..."
        />
      </div>
      <div className="w-full md:w-64 rounded-sm py-4">
        <Button variant={"secondary"}>Click me</Button>
      </div>
    </div>
  );
};
