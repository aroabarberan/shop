import React, { Component } from 'react';
import SimpleAppBar from '../components/SimpleAppBar';
import { connect } from "react-redux";
import { Paper, withStyles } from '@material-ui/core';
import { allClient, createClient } from '../actions/clientActions'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: [this.props.clients],
    }
  }

  render() {
    const { clients } = this.state;
    { let bla = this.props.allClient() }
    return (
      <div>
        <SimpleAppBar />
        <Paper className={this.props.classes.root} elevation={1}>
          {clients.map((client, index) => (
            <Paper key={index} className={this.props.classes.paper} elevation={1}>
              <h2>Cliente numero {++index}</h2>
              <p>Name: {client.clients[0].name}</p>
              <p>Last Name: {client.clients[0].last_name}</p>
            </Paper>
          ))}
        </Paper>

        {setTimeout((bla) => {
          console.log(bla)
        }, 3000)}
      </div>
    );
  }
}


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


const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: 40,
    marginTop: 100
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(App))