import React from "react"
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import AddClient from "../components/AddClient";


const SimpleAppBar = props => (
  <div className={props.classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Clients
          </Typography>
        </Toolbar>
        <div>
        <AddClient />
        </div>
      </AppBar>
    </div>
)

const styles = {
  root: {
    flexGrow: 1,
  },
};

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);