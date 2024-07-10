import { useRequest } from "./useRequest";

export const usePlanetsService = () => {
  const { loading, request, error, clearError } = useRequest();

  const apiUrl = "https://swapi.dev/api/planets";
  const firstPage = 1;

  const getPlanetsData = async (page: number = firstPage) => {
    const res = await request(`${apiUrl}/?page=${page}`);
    return res.results;
  };

  const getSearchRes = async (searchStr: string) => {
    const searchParam = searchStr.trim();
    const res = await request(`${apiUrl}/?search=${searchParam}`);
    return res.results;
  };

  return {
    loading,
    error,
    clearError,
    getPlanetsData,
    getSearchRes,
  };
};
