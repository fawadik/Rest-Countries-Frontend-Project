/*import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./combineReducers";
//import reducer from "./reducer";

const defaultState = {
  color: "#1976D2",
  cart: [],
  searchCountries: "",
  darkTheme: false,
};

const storeFactory = () => {
  const localStorageState = localStorage.getItem("redux") ?? defaultState;
  const reduxStore = createStore(
    allReducers,

    JSON.parse(localStorageState),
    composeWithDevTools()
  );

  reduxStore.subscribe(() => {
    const currentState = reduxStore.getState();
    localStorage.setItem("redux", JSON.stringify(currentState));
  });

  return reduxStore;
};

export default storeFactory;*/

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./combineReducers";
//import reducer from "./reducer";

const storeFactory = () => {
  //const cartString = localStorage.getItem("cart");
  //const cart = cartString ? JSON.parse(cartString) : [];

  const reduxStore = createStore(
    allReducers,
    // { cart: cart },
    composeWithDevTools()
  );

  return reduxStore;
};

export default storeFactory;
