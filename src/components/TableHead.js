import React from "react";
import MTableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  tableHeadStyle: {
    borderTop: "2px solid #1976D2",
    borderBottom: "2px solid #1976D2",
    color: "#1976D2",
    fontWeight: "bold",
    height: "auto",
  },
  starStyle: {
    color: "red",
  },
});

function TableHead() {
  let cart = useSelector((state) => state.reducer.cart);
  const classes = useStyles();
  return (
    <MTableHead>
      <TableRow>
        <TableCell
          className={classes.tableHeadStyle}
          width="19%"
          align="center"
        >
          FLAG
        </TableCell>
        <TableCell
          className={classes.tableHeadStyle}
          width="19%"
          align="center"
        >
          NAME
        </TableCell>
        <TableCell
          className={classes.tableHeadStyle}
          width="19%"
          align="center"
        >
          POPULATION
        </TableCell>
        <TableCell
          className={classes.tableHeadStyle}
          width="19%"
          align="center"
        >
          REGION
        </TableCell>
        <TableCell
          className={classes.tableHeadStyle}
          width="19%"
          align="center"
        >
          LANGUAGES
        </TableCell>
        <TableCell className={classes.tableHeadStyle} width="5%" align="center">
          <Link to="/country/cart">
            <Badge badgeContent={cart.length} className={classes.starStyle}>
              <StarIcon className={classes.starStyle} fontSize="large" />
            </Badge>
          </Link>
        </TableCell>
      </TableRow>
    </MTableHead>
  );
}

export default TableHead;
