const defaultState = {
  darkTheme: false,
};

const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DARK_THEME":
      return {
        ...state,
        darkTheme: true,
      };
    case "LIGHT_THEME":
      return {
        ...state,
        darkTheme: false,
      };

    default:
      return state;
  }
};

export default themeReducer;
