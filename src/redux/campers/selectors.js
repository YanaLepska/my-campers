import { createSelector } from "@reduxjs/toolkit";
import {
  selectLocationFilter,
  selectTransmissionFilter,
  selectTVFilter,
} from "../filters/selectors";
import { capitalizeFirstLetter, formatLocation } from "../../function";

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

export const selectTranmissionCampers = createSelector(
  [selectCampers, selectTransmissionFilter],
  (campers, transmission) => {
    if (!transmission) {
      return campers;
    }
    return campers.filter(
      (camper) => capitalizeFirstLetter(camper.transmission) === "Automatic"
    );
  }
);

export const selectTVCampers = createSelector(
  [selectCampers, selectTVFilter],
  (campers, tv) => {
    if (!tv) {
      return campers;
    }
    return campers.filter((camper) => camper.details && camper.details.TV > 0);
  }
);
