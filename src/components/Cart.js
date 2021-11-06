import React from "react";
import { useSelector } from "react-redux";
import CustomTableRow from "./CustomTableRow";
import Typography from "@material-ui/core/Typography";
import MTable from "@material-ui/core/Table";
import TableHead from "./TableHead";
import TableBody from "@material-ui/core/TableBody";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  rowStyles: {
    marginTop: "2%",
    marginBottom: "2%",
    color: "#1976D2",
  },
});

function Cart() {
  const classes = useStyles();
  const data = useSelector((state) => state.reducer.cart);
  let searchValue = useSelector((state) => state.reducer.searchCountries);

  let filteredCountries = data.filter((country) => {
    return country.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  if (data) {
    return (
      <>
        <div className={classes.rowStyles}>
          <Typography variant="h5" noWrap>
            Favourite Countries
          </Typography>
        </div>
        <MTable
          component={Paper}
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead />

          <TableBody>
            {" "}
            {filteredCountries
              ? filteredCountries.map((country) => (
                  <CustomTableRow key={country.name} country={country} />
                ))
              : data.map((country) => (
                  <CustomTableRow key={country.name} country={country} />
                ))}
          </TableBody>
        </MTable>
      </>
    );
  } else {
    return <p>There is no favourite country in the cart!</p>;
  }
}

export default Cart;
