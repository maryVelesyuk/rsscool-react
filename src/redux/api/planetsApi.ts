import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PlanetsRequest } from "../../components/shared/PlanetCard/PlanetCard.model";

export const planetsApi = createApi({
  reducerPath: "planetsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/planets" }),
  endpoints: (builder) => ({
    getPlanets: builder.query<PlanetsRequest, number>({
      query: (page) => `/?page=${page}`,
    }),
    getPlanetsBySearchParam: builder.query<PlanetsRequest, string>({
      query: (searchParam) => `/?search=${searchParam}`,
    }),
  }),
});

export const { useGetPlanetsQuery, useGetPlanetsBySearchParamQuery } =
  planetsApi;
