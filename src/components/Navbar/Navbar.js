import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import album from "../../images/album.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Album
      </Typography>
      <img className={classes.image} src={album} alt="icon" height="60" />
    </AppBar>
  );
};
export default Navbar;
