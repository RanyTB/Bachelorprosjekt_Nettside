import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "../styles/styles";

function Banner(props) {
  const classes = styles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Bachelorprosjekt
        </Typography>

        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          App for spillgruppen til Accenture
        </Typography>
      </Container>
    </div>
  );
}

export default Banner;
