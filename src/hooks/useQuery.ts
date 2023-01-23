import { useState, useEffect, useCallback } from "react";

import { fetchApi } from "../services/fetchApi";

import { IItem } from "../interfaces/result";

interface IParams {
  query: string;
};

type TReturnHook = {
  data: IItem[],
  isLoading: boolean,
  error: Error | null,
  hasMore: boolean | undefined,
  loadMore: () => void,
  clearData: () => void,
};

export function useQuery ({ query }: IParams): TReturnHook {
  console.log(query);
  
  const [data, setData] = useState<IItem[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const hasMore = nextPageToken !== "";

  useEffect(() => {
    if ( query === "" ) return;
    setData([]);
    setIsLoading(true);
    setError(null);

    fetchApi({query})
    .then((data) => {
      setData(data?.items || []);
      setNextPageToken(data?.nextPageToken || "");
    })
    .catch((error) => setError(error))
    .finally(() => setIsLoading(false));
  }, [query]);

  const loadMore = () => {
    if ( hasMore ) {
      fetchApi({query, nextPageToken})
      .then((data) => {
        setData((prevData) => [
          ...prevData,
          ...(data?.items || [])
        ]);
        setNextPageToken(data?.nextPageToken || "");
      })
      .catch((error) => setError(error));
    };
  };

  const clearData = useCallback(() => {
    setData([]);
    setError(null);
    setIsLoading(false);
    setNextPageToken("");
  }, []);

  return { data, isLoading, error, hasMore, loadMore, clearData };
};