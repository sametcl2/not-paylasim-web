import { IoSearchSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white px-6 py-4 mb-4 rounded-md">
      <div className="flex flex-row items-center mb-4 md:mb-0 w-full">
        <IoSearchSharp size={28} className="text-gray-500 mr-2" />
        <Input
          type="text"
          className="h-12 p-2 w-full mr-2"
          placeholder="Ders adı, okul adı, hoca adı..."
        />
      </div>
      <Button variant="default" className="bg-blue-700 p-6">
        Notlar Gelsin!
      </Button>
    </div>
  );
};
