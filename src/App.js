import { Switch, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Country from "./components/Country";
//import useCountries from './custom-hooks/useCountries';
//import useCountry from "./custom-hooks/useCountry";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      type: "light",
    },
  });
  const currentTheme = useSelector((state) => state.themeReducer.darkTheme);
  console.log(currentTheme);
  return (
    <ThemeProvider theme={currentTheme ? darkTheme : lightTheme}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Table />
          </Route>
          <Route exact path="/:countryName">
            <Country />
          </Route>
          <Route exact path="/country/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
