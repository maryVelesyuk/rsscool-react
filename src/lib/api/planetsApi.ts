import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PlanetsRequest } from "../../components/shared/PlanetCard/PlanetCard.model";

export const planetsApi = createApi({
  reducerPath: "planetsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/planets" }),
  endpoints: (builder) => ({
    getPlanets: builder.query<
      PlanetsRequest,
      { page: string; searchParam: string }
    >({
      query: ({ page = "", searchParam = "" }) =>
        `/?page=${page}&search=${searchParam}`,
    }),
    getPlanetsBySearchParam: builder.query<PlanetsRequest, string>({
      query: (searchParam) => `/?search=${searchParam}`,
    }),
  }),
});

export const { useGetPlanetsQuery, useGetPlanetsBySearchParamQuery } =
  planetsApi;
