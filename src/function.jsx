export const capitalizeFirstLetter = (string) => {
  if (string.length === 2) {
    return string.toUpperCase();
  }
  if (string === "panelTruck") {
    return "Panel truck";
  }
  if (string === "fullyIntegrated") {
    return "Fully integrated";
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

  export const formatKey = (key) => {
    if (key.toLowerCase() === "airconditioner") {
      return "Air сonditioner";
    }
    return capitalizeFirstLetter(key);
  };
