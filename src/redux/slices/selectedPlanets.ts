import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Planet } from "../../components/shared/PlanetCard/PlanetCard.model";

type SliceState = {
  planetsName: string[];
  planetsInfo: Planet[];
};

const initialState: SliceState = {
  planetsInfo: [],
  planetsName: [],
};

const selectedPlanets = createSlice({
  name: "selectedPlanets",
  initialState,
  reducers: {
    addPlanet(state, action: PayloadAction<Planet>) {
      state.planetsName.push(action.payload.name);
      state.planetsInfo.push(action.payload);
    },
    removePlanet(state, action: PayloadAction<string>) {
      state.planetsName = state.planetsName.filter(
        (planet) => planet !== action.payload
      );
      state.planetsInfo = state.planetsInfo.filter(
        (planet) => planet.name !== action.payload
      );
    },
    unselectAll(state) {
      state.planetsInfo = [];
      state.planetsName = [];
    },
  },
});

const { actions, reducer } = selectedPlanets;

export const { addPlanet, removePlanet, unselectAll } = actions;

export default reducer;
