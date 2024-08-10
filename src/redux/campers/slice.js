import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvert } from "./operations";

export const INITIAL_STATE = {
  campers: {
    items: [],
  },
};

const campersSlice = createSlice({
    name: "campers",
    initialState: INITIAL_STATE.campers,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdvert.fulfilled, (state, action) => {
                state.items = action.payload;
        })
    },
});

export const campersReducer = campersSlice.reducer;