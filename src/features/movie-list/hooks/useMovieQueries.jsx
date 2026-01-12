import getPopular from "../api/getPopular";
import getSearch from "../api/getSearch";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

export const usePopularList = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ["popular"],
    queryFn: ({ pageParam = 1 }) => getPopular(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};

export const useSearchList = (query) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["search", query],
    queryFn: ({ pageParam = 1 }) => getSearch(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
