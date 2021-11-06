import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import { useDispatch } from "react-redux";
import { searchCountry } from "../redux/action";
import { lightTheme, darkTheme } from "../redux/action";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgColor: {
    backgroundColor: "#1976D2",
  },
  title: {
    flexGrow: 1,
    display: "none",
    color: "white",
    textDecoration: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    let searchValue = e.target.value;
    dispatch(searchCountry(searchValue));
  };

  const currentTheme = useSelector((state) => state.themeReducer.darkTheme);

  const changeTheme = () => {
    if (currentTheme) {
      dispatch(lightTheme());
    } else {
      dispatch(darkTheme());
      console.log(currentTheme);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bgColor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
            <Typography variant="h6" noWrap className={classes.title}>
              <Link to="/" className={classes.title}>
                Home
              </Link>
            </Typography>
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            <ThemeButton changeTheme={changeTheme} />
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={changeHandler}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
