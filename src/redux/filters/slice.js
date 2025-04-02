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
  typeFilter: {
    van: false,
    integrated: false,
    alcove: false,
  },
  isSearchClicked: false,
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
    toggleTypeFilter(state, action) {
      const filterKey = action.payload;
      if (state.typeFilter[filterKey]) {
        state.typeFilter[filterKey] = false;
      } else {
        state.typeFilter.van = false;
        state.typeFilter.integrated = false;
        state.typeFilter.alcove = false;
        state.typeFilter[filterKey] = true;
      }
    },
    applyFilters(state) {
      state.isSearchClicked = true;
    },
    resetFilters(state) {
      state.isSearchClicked = false;
      state.filters = filtersInitialState.filters;
      state.typeFilter = filtersInitialState.typeFilter;
      state.location = filtersInitialState.location;
    },
  },
});

export const {
  setLocationFilter,
  toggleFilter,
  toggleTypeFilter,
  applyFilters,
  resetFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
