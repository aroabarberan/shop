import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import immutable from "redux-immutable-state-invariant";
import { clients } from "./reducers/clientReducer";
import { reducer as form } from 'redux-form'
import logger from 'redux-logger'

export default createStore(
  combineReducers({ clients, form }),
  composeWithDevTools(applyMiddleware(logger, immutable()))
)