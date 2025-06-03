import { HelperText, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import Button from "@/components/elements/button";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const {
    formState: { errors },
    handleSubmit,
    register: registerField,
  } = useForm({
    defaultValues: { search: "" },
  });

  function onSubmit(values: { search: string }) {
    if (!errors.search) {
      onSearch(values.search);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row items-center md:space-x-2 mb-2">
          <TextInput
            type="text"
            className="flex-1"
            placeholder="Ders, Akademisyen"
            color={errors.search?.message ? "failure" : "gray"}
            {...registerField("search", {
              required: "Bu alan boş bırakılamaz",
            })}
          />
          <Button type="submit">Ara</Button>
        </div>
        {errors.search && <HelperText>{errors.search.message}</HelperText>}
      </form>
    </div>
  );
};
