import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { pink, green } from '@material-ui/core/colors'
import { Provider } from "react-redux"
import store from "./store"


const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: green,
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
