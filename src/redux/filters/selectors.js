export const selectLocationFilter = (state) => state.filters.location || '';
export const selectTransmissionFilter = (state) => state.filters.filters.transmission;
export const selectTVFilter = (state) => state.filters.filters.tv;
export const selectGasFilter = (state) => state.filters.filters.gas;
export const selectMicrowaveFilter = (state) => state.filters.filters.microwave;
export const selectBathroomFilter = (state) => state.filters.filters.bathroom;
export const selectACFilter = (state) => state.filters.filters.ac;

export const selectActiveFilter = (state) => state.filters.filters;
export const selectActiveTypeFilter = (state) => state.filters.typeFilter;

export const selectIsSearchClicked = (state) => state.filters.isSearchClicked;