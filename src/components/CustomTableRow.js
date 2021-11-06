import React from "react";
import MTableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import { insertCountry, removeCountry } from "../redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  tableBodyStyle: {
    fontWeight: "bold",
  },
  buttonStyle: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const style = {
  textDecoration: "None",
};

function CustomTableRow({ country }) {
  const classes = useStyles();
  let cart = useSelector((state) => state.reducer.cart);

  let isCountryInCart = cart
    .map((countryInCart) => countryInCart.name)
    .includes(country.name);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(insertCountry(country));
  };

  const removeFromCart = () => {
    dispatch(removeCountry(country));
  };

  const { flag, name, population, region, languages } = country;
  return (
    <MTableRow>
      <TableCell className={classes.tableBodyStyle} align="center">
        <img src={flag} alt="Country Flag" width="200px" height="150px"></img>
      </TableCell>
      <TableCell className={classes.tableBodyStyle} align="center">
        <Link to={`/${name}`} style={style}>
          {name}
        </Link>
      </TableCell>
      <TableCell className={classes.tableBodyStyle} align="center">
        {population}
      </TableCell>
      <TableCell className={classes.tableBodyStyle} align="center">
        {region}
      </TableCell>
      <TableCell className={classes.tableBodyStyle} align="center">
        {languages[0].name}
      </TableCell>
      <TableCell width="5%" align="center">
        <StarIcon
          onClick={() => {
            if (isCountryInCart) {
              removeFromCart();
            } else {
              addToCart();
            }
          }}
          className={classes.buttonStyle}
          style={{
            color: isCountryInCart ? "red" : "#1976D2",
          }}
          fontSize="large"
        />
      </TableCell>
    </MTableRow>
  );
}

export default CustomTableRow;
