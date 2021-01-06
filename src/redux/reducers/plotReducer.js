import _ from "lodash";
import { FETCH_PLOTS } from "../types";

const initialState = {
  data: [],
  current: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLOTS:
      return {
        ...state,
        data: { ..._.mapKeys(action.payload, "id") },
      };
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
