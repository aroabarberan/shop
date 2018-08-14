import React from 'react'
import { connect } from "react-redux";
import { Paper, withStyles } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'
import { allClient, createClient } from '../actions/clientActions'

const nameForm = 'create-client'

class ClientForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      name: '',
      last_name: '',
      open: true,
    };
  }

  submit = evt => {
    evt.preventDefault();
    const { name, last_name } = this.state;
    this.setState(({ clients }) => ({ clients: [...clients, { name, last_name }] }));
    this.props.createClient({name, last_name})
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div>
        <h4>Clients</h4>
        <Paper>
          <form onSubmit={this.submit}>
            <Field name="name" label="Name" 
              component={renderField} 
              onChange={this.handleChange} type="text" />

            <Field name="last_name" label='Last name' 
              component={renderField} onChange={this.handleChange} 
              type="text" />
            <button type="submit">Submit</button>
          </form>
        </Paper>
      </div>
    )
  }
}


const renderField = ({ type, label, input, meta: { touched, error } }) => {
  return (
    <div className='input-row' >
      <label>{label}</label>
      <input {...input} type={type} />
      {touched && error && <span className='error'>{error}</span>}
    </div>
  )
}


const styles = theme => ({
  root: {
    margin: 10,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
});

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


export default connect(mapStateToProps, mapDispatchToProps)
  (withStyles(styles, { withTheme: true })
    (reduxForm({ form: nameForm })(ClientForm)))
