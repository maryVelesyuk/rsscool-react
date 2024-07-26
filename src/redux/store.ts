import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { planetsApi } from "./api/planetsApi";
import selectedPageReducer from "./slices/selectedPage";
import selectedPlanetsReducer from "./slices/selectedPlanets";

export const rootReducer = combineReducers({
  selectedPage: selectedPageReducer,
  selectedPlanets: selectedPlanetsReducer,
  [planetsApi.reducerPath]: planetsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(planetsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
