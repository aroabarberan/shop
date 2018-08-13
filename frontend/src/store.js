import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { clients } from "./reducers/clientReducer";
import { reducer as form } from 'redux-form'


export default createStore(
  combineReducers({ clients, form }),
  composeWithDevTools(applyMiddleware(logger, immutable()))
)