import React from "react";

import Typography from "@material-ui/core/Typography";
import styles from "../styles/styles";

function Footer(props) {

  const classes = styles()
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Bacheloroppgave
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Accenture & OsloMet
      </Typography>
    </footer>
  );
}

export default Footer;
