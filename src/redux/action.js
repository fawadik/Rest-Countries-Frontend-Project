//cart contains different country objects in an array

export const insertCountry = (country) => {
  return {
    type: "INSERT_COUNTRY",
    payload: country,
  };
};

export const removeCountry = (country) => {
  return {
    type: "REMOVE_COUNTRY",
    payload: country,
  };
};

export const searchCountry = (country) => {
  return {
    type: "SEARCH_COUNTRY",
    payload: country,
  };
};

export const lightTheme = () => {
  return {
    type: "LIGHT_THEME",
  };
};

export const darkTheme = () => {
  return {
    type: "DARK_THEME",
  };
};
