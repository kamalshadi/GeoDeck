import _ from "lodash";
import * as types from "../types";

const initialState = {
//   projects: [
//     { id: 1, title: "USA Geothermal", time: "09/09/2020", image: "01.jpg" },
//     { id: 2, title: "Well Optimization", time: "10/21/2020", image: "02.jpg" },
//     { id: 3, title: "USA Geothermal", time: "11/27/2020", image: "03.jpg" },
//     { id: 4, title: "Well Optimization", time: "12/01/2020", image: "04.png" },
//     { id: 5, title: "USA Geothermal", time: "12/18/2020", image: null },
//   ],
//   project: {},
//   loading: false,
//   error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

// import _ from 'lodash';
// import {
//   FETCH_STREAM,
//   FETCH_STREAMS,
//   CREATE_STREAM,
//   EDIT_STREAM,
//   DELETE_STREAM
// } from '../actions/types';

// export default (state = {}, action) => {
//   switch (action.type) {
//     case FETCH_STREAMS:
//       return { ...state, ..._.mapKeys(action.payload, 'id') };
//     case FETCH_STREAM:
//       return { ...state, [action.payload.id]: action.payload };
//     case CREATE_STREAM:
//       return { ...state, [action.payload.id]: action.payload };
//     case EDIT_STREAM:
//       return { ...state, [action.payload.id]: action.payload };
//     case DELETE_STREAM:
//       return _.omit(state, action.payload);
//     default:
//       return state;
//   }
// };
