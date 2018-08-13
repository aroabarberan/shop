import React from "react"
import { Button, Paper, Modal, withStyles } from '@material-ui/core';
import ClientForm from "../containers/ClientForm";
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';


function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


class AddClient extends React.Component {
  state = {
    clients: [],
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  render() {
    const { clients } = this.state;
    const { classes } = this.props

    return (
      <div>
        <div className={classes.button_add}>
          <Button onClick={this.handleOpen} variant="fab" color="primary" aria-label="Add" className={classes.button}>
            <AddIcon />
          </Button>
        </div>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <ClientForm />
          </div>
        </Modal>
        <div>
          {clients.map((client, index) => (
            <Paper key={index} className={classes.root} elevation={1}>
              <p>Name: {client.name}</p>
              <p>Last Name: {client.last_name}</p>
            </Paper>
          ))}
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },

  button_add: {
    paddingTop: 100,
  },

  button: {
    margin: theme.spacing.unit,
  },
})

AddClient.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AddClient);