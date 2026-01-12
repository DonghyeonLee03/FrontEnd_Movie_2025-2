import getGenre from "../api/getGenre";
import { useQuery } from "@tanstack/react-query";

export const useGenreList = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: getGenre,
    staleTime: 1000 * 60 * 60 * 12,
  });
};
