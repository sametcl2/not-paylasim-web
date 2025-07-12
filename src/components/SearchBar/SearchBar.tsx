import { HelperText, TextInput } from "@/components/elements/text-input";
import { useForm } from "react-hook-form";
import Button from "@/components/elements/button";
import { Search } from "lucide-react";

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
    <div className="max-w-2xl mx-auto md:mx-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-2">
          <TextInput
            type="text"
            icon={Search}
            sizing="md"
            className="relative flex-1 items-center bg-white rounded-xl border-2 border-accent hover:border-primary/30 transition-all duration-300"
            placeholder="Ders adı, konu veya akademisyen"
            color={errors.search?.message ? "error" : undefined}
            {...registerField("search", {
              required: "Bu alan boş bırakılamaz",
            })}
          />
          <div className="pr-2">
            <Button type="submit" variant="primary" size="sm">
              Notlar Gelsin
            </Button>
          </div>
        </div>
        {errors.search && (
          <HelperText className="mt-3 text-center md:text-left text-destructive font-medium">
            {errors.search.message}
          </HelperText>
        )}
      </form>
    </div>
  );
};
