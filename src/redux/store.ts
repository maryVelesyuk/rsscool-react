import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { planetsApi } from "./api/planetsApi";
import selectedPageReducer from "./slices/selectedPage";

export const rootReducer = combineReducers({
  selectedPage: selectedPageReducer,
  [planetsApi.reducerPath]: planetsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(planetsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
