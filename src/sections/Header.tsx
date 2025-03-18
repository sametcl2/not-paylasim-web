import { IoMenuSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="sticky top-0 md:hidden ">
      <div className="container">
        <div className="p-6">
          <IoMenuSharp size={30} />
        </div>
      </div>
    </header>
  );
};
