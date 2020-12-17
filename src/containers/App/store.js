import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  cryptoTableReducer,
  newOrderTableReducer,
  sidebarReducer,
  themeReducer,
  customizerReducer,
  rtlReducer,
  authReducer,
  threeReducer
} from '../../redux/reducers/index';
import appConfigReducer from '../../redux/reducers/appConfigReducer';
import covidReducer from '../Maps/VectorMapWithRequestData/redux/covidReducer';
import todoReducer from '../Todo/redux/reducer';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  rtl: rtlReducer,
  appConfig: appConfigReducer,
  sidebar: sidebarReducer,
  cryptoTable: cryptoTableReducer,
  newOrder: newOrderTableReducer,
  customizer: customizerReducer,
  user: authReducer,
  covid: covidReducer,
  todo: todoReducer,
  three: threeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Redux Store
export const store = createStore(reducer, {}, composeEnhancers(
  applyMiddleware(thunk.withExtraArgument())
))


export default store;
