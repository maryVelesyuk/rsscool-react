// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { planetsApi } from "./api/planetsApi";
// import selectedPageReducer from "./features/selectedPage";
// import selectedPlanetsReducer from "./features/selectedPlanets";

// export const rootReducer = combineReducers({
//   selectedPage: selectedPageReducer,
//   selectedPlanets: selectedPlanetsReducer,
//   [planetsApi.reducerPath]: planetsApi.reducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (gDM) => gDM().concat(planetsApi.middleware),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { planetsApi } from "./api/planetsApi";
import selectedPageReducer from "./features/selectedPage";
import selectedPlanetsReducer from "./features/selectedPlanets";

export const rootReducer = combineReducers({
  selectedPage: selectedPageReducer,
  selectedPlanets: selectedPlanetsReducer,
  [planetsApi.reducerPath]: planetsApi.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(planetsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
