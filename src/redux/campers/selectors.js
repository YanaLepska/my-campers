import { createSelector } from "@reduxjs/toolkit";
import {
  selectACFilter,
  selectBathroomFilter,
  selectLocationFilter,
  selectMicrowaveFilter,
  selectTransmissionFilter,
  selectTVFilter,
} from "../filters/selectors";
import { capitalizeFirstLetter, formatLocation } from "../../function";

export const selectCampers = (state) => state.campers.items || [];
export const selectHasMore = (state) => state.campers.hasMore;

export const selectVisibleCampers = createSelector(
  [
    selectCampers,
    selectLocationFilter,
    selectTransmissionFilter,
    selectTVFilter,
    selectACFilter,
    selectMicrowaveFilter,
    selectBathroomFilter,
  ],
  (campers, location, transmission, tv, ac, microwave, bathroom) => {
    if (!location && !transmission && !tv && !ac && !microwave && !bathroom) {
      return campers;
    }
    return campers.filter((camper) => {
      if (
        location &&
        location !== "All towns" &&
        camper.location !== formatLocation(location)
      )
        return false;
      if (
        transmission &&
        capitalizeFirstLetter(camper.transmission) !== "Automatic"
      )
        return false;
      if (tv && camper.TV !== true) return false;
      if (ac && camper.AC !== true) return false;
      if (microwave && camper.microwave !== true) return false;
      if (bathroom && camper.bathroom !== true) return false;
      //if () return false;
      return true;
    });
  }
);
