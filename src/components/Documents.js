import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import styles from "../styles/styles";

function Documents({ bachelorDocuments }) {
  const classes = styles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {bachelorDocuments.map((bachelorDocument) => (
          <Grid item key={bachelorDocument.title} xs={12} sm={6} md={3}>
            <Link color="inherit" href={bachelorDocument.documentLink}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={bachelorDocument.bilde}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {bachelorDocument.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Documents;
