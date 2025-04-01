import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  location: "",
  filters: {
    ac: false,
    transmission: false,
    gas: false,
    tv: false,
    microwave: false,
    bathroom: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setLocationFilter(state, action) {
      state.location = action.payload;
    },
    toggleFilter(state, action) {
      const filterKey = action.payload;
      state.filters[filterKey] = !state.filters[filterKey];
    },
  },
});
export const { setLocationFilter, toggleFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
