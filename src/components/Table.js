import React from "react";
import MTable from "@material-ui/core/Table";
import TableHead from "./TableHead";
import TableBody from "@material-ui/core/TableBody";
import useCountries from "../custom-hooks/useCountries";
import CustomTableRow from "./CustomTableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  rowStyles: {
    marginTop: "2%",
    marginBottom: "2%",
    color: "#1976D2",
  },
});

function Table() {
  const classes = useStyles();
  let searchValue = useSelector((state) => state.reducer.searchCountries);

  let [data, error] = useCountries("https://restcountries.com/v2/all");
  if (error) {
    return <h1>"There is no data, check error!" {error}</h1>;
  }
  console.log(data);
  let filteredCountries = data.filter((country) => {
    return country.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <div className={classes.rowStyles}>
        <Typography variant="h5" noWrap>
          Rest Countries Data
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
}

export default Table;
