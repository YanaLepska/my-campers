import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
    location: '',
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        setLocationFilter(state, action) {
            state.location = action.payload; 
        }
    }
});
export const { setLocationFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
