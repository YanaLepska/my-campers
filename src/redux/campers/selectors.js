import { createSelector } from "@reduxjs/toolkit";
import { selectLocationFilter } from "../filters/selectors";
import { formatLocation } from "../../function";

export const selectCampers = (state) => state.campers.items || [];
export const selectHasMore = (state) => state.campers.hasMore;

export const selectVisibleCampers = createSelector(
  [selectCampers, selectLocationFilter],
  (campers, location) => {
    if (!location || location === "All towns") {
      return campers;
    }
    const normalizedFilter = formatLocation(location);
    const filteredCampers = campers.filter(
      (camper) => camper.location === normalizedFilter
    );
    return filteredCampers;
  }
);
