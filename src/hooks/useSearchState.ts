import { SearchNoteResponseType } from "@/types/note";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export const useSearchState = ({
  notesData,
}: {
  notesData: SearchNoteResponseType | undefined;
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState<string>("");

  const categoryFilters = useMemo(() => {
    const filters = notesData?.data.map((note) => {
      return {
        label: note.courseName,
        value: note.courseName,
      };
    });

    return [{ value: "all", label: "Tümü" }, ...new Set(filters)];
  }, [searchTerm]);

  useEffect(() => {
    const keyword = searchParams.get("keyword");

    if (keyword && keyword !== searchTerm) {
      setSearchTerm(keyword);
    }
  }, [searchParams]);

  const updateUrlParams = useCallback(
    (params: Record<string, string>) => {
      const urlParams = new URLSearchParams();
      console.log("Updating URL params:", params);
      console.log(Object.entries(params));
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          urlParams.set(key, value);
        }
      });
      navigate(`/search?${urlParams.toString()}`);
    },
    [navigate]
  );

  const resetFilters = useCallback(() => {
    setSearchTerm("");
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    updateUrlParams,
    resetFilters,
  };
};
