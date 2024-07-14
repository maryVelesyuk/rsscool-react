import { useRequest } from "./useRequest";

export const usePlanetsService = () => {
  const { loading, request, error, clearError, setError } = useRequest();

  const apiUrl = "https://swapi.dev/api/planets";
  const firstPage = 1;

  const getPlanetsData = async (page: number = firstPage) => {
    console.log("getData");
    const res = await request(`${apiUrl}/?page=${page}`);
    return res;
  };

  const getSearchRes = async (searchStr: string) => {
    console.log("search");
    const searchParam = searchStr.trim();
    const res = await request(`${apiUrl}/?search=${searchParam}`);
    return res;
  };

  return {
    loading,
    error,
    clearError,
    setError,
    getPlanetsData,
    getSearchRes,
  };
};
