const defaultState = {
  color: "#1976D2",
  cart: [],
  searchCountries: "",
};

const reducer = (state = defaultState, action) => {
  const incomingCountry = action.payload;
  switch (action.type) {
    case "INSERT_COUNTRY":
      const incomingCountryName = incomingCountry.name;
      const existingCountry = state.cart.find((country) => {
        if (incomingCountryName === country.name) {
          return true;
        }
        return false;
      });
      if (existingCountry) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, incomingCountry],
      };

    case "REMOVE_COUNTRY":
      //const countryToRemove = action.payload;
      //console.log(countryToRemove);
      //const countryName = countryToRemove.name;
      const newFavouriteCountries = state.cart.filter(
        (country) => country !== incomingCountry
      );
      console.log(newFavouriteCountries);
      return {
        ...state,
        cart: [...newFavouriteCountries],
      };
    case "SEARCH_COUNTRY":
      const searchValue = action.payload;
      //const targetCountries = state.searchCountries.map((country)=>)
      return {
        ...state,
        searchCountries: searchValue,
      };
    default:
      return state;
  }
};

export default reducer;
