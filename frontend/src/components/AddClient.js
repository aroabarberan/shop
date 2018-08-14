import React from "react"
import { connect } from "react-redux";
import { Button, Paper, Modal, withStyles } from '@material-ui/core';
import ClientForm from "../containers/ClientForm";
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { allClient, createClient } from '../actions/clientActions'


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
  constructor(props) {
    super(props)
    this.state = {
      clients: this.props.clients,
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  render() {
    const { classes } = this.props

    return (
      <div>
        <div>
          <Button onClick={this.handleOpen} variant="fab" color="primary" aria-label="Add" className={classes.button}>
            <AddIcon />
          </Button>
        </div>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <ClientForm/>
          </div>
        </Modal>
      </div>

    )
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },

  button: {
    position: 'absolute',
    marginTop: 750,
    margin: theme.spacing.unit,
  },
})

AddClient.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    clients: state.clients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    allClient: () => {
      dispatch(allClient())
    },
    createClient: client => {
      dispatch(createClient(client))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(AddClient));