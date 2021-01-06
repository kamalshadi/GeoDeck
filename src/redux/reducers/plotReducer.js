import _ from "lodash";
import { FETCH_PLOTS } from "../types";

const initialState = {
  data: [],
  currentIds: [],
  dataId: null,
  pointId: null,
  lineId: null,
  isPoint: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLOTS: {
      const fetchedData = getPlots(action.payload);
      console.log(fetchedData);
      return {
        ...state,
        ...fetchedData,
      };
    }
    default:
      return state;
  }
};

const getPlots = (payload) => {
  const payloadData = payload[0]?.data;
  const payloadPoints = payloadData ? payloadData[0]?.points : null;
  const payloadLines = payloadData ? payloadData[0]?.lines : null;
  return {
    data: payload,
    currentIds: [0],
    dataId: payloadData ? payloadData[0]?.id : null,
    pointId: payloadPoints ? payloadPoints[0]?.id : null,
    lineId: payloadLines ? payloadLines[0]?.id : null,
    isPoint: true,
  };
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
