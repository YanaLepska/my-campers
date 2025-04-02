import { createSelector } from "@reduxjs/toolkit";
import {
  selectACFilter,
  selectActiveTypeFilter,
  selectBathroomFilter,
  selectIsSearchClicked,
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
    selectActiveTypeFilter,
    selectIsSearchClicked
  ],
  (campers, location, transmission, tv, ac, microwave, bathroom, typeFilter,isSearchClicked) => {
    if (!isSearchClicked) {
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
      if (typeFilter.van && capitalizeFirstLetter(camper.form) !== "Panel truck")
        return false;
      if (typeFilter.integrated && capitalizeFirstLetter(camper.form) !== "Fully integrated")
        return false;
      if (typeFilter.alcove && capitalizeFirstLetter(camper.form) !== "Alcove")
        return false;
      return true;
    });
  }
);
