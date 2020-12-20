import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../../redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
  // applyMiddleware(thunk)
);

export default store;
