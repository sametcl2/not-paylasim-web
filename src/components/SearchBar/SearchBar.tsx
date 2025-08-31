import Button from "@/components/elements/button";
import { HelperText, TextInput } from "@/components/elements/text-input";
import { SortBy } from "@/types/search";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

type SearchBarProps = {
  onSearch: (query: string) => void;
  buttonName?: string;
  showFilters?: boolean;
  selectedCategory?: string;
  categoryFilters?: { label: string; value: string }[];
  sortBy?: SortBy;
  onCategoryChange?: (category: string) => void;
  onSortByChange?: (sortBy: SortBy) => void;
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
    <div className="w-full mx-auto md:mx-0 ">
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
          <Button type="submit" variant="primary">
            Notlar Gelsin
          </Button>
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
