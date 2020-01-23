import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";



function Navigation() {

    const useStyles = makeStyles(theme => ({

        appBar: {
          backgroundColor: "#A100FF"
        }
      }));

      const classes = useStyles();


    return (
        
        <div>
        <CssBaseline />
        <AppBar position="relative" className={classes.appBar}>
          
          <Toolbar>
          </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navigation