import React, { Component } from 'react';
import SimpleAppBar from '../components/SimpleAppBar';
import { connect } from "react-redux";
import { Paper, withStyles } from '@material-ui/core';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: [this.props.clients],
    }
  }

  render() {
    const { clients } = this.state;
    return (
      <div>
        <SimpleAppBar />
        <Paper className={this.props.classes.root} elevation={1}>
          {clients.map((client, index) => (
            <Paper key={index} className={this.props.classes.paper} elevation={1}>
              <p>Name: {client.clients.name}</p>
              <p>Last Name: {client.clients.last_name}</p>
            </Paper>
          ))}
        </Paper>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    clients: state.clients
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 80,
  },
})

export default connect(mapStateToProps)
  (withStyles(styles, { withTheme: true })(App))