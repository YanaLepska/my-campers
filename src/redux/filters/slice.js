import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
    location: '',
    transmission: false,
    tv: false,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        setLocationFilter(state, action) {
            state.location = action.payload; 
        },
        setTransmissionFilter(state, action) {
            state.transmission = action.payload; 
        }, 
        setTVFilter(state, action) {
            state.tv = action.payload; 
        },
    }
});
export const { setLocationFilter, setTransmissionFilter, setTVFilter} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
