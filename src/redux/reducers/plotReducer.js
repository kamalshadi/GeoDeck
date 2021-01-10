import _ from "lodash";
import {
  FETCH_PLOTS,
  UPDATE_PLOT,
  FETCH_PLOT_TYPES,
  CREATE_PLOT_TYPE,
} from "../types";

const initialState = {
  data: [],
  currentIds: [],
  variableId: null,
  pointId: null,
  lineId: null,
  isPoint: true,
};

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PLOT_TYPES: {
      return {
        ...state,
        ..._.mapKeys(action.payload, "id"),
      };
    }
    case CREATE_PLOT_TYPE: {
      action.payload.id = _.size(state) + 1;
      const simulationData = getPlots(action.payload?.simulations);

      const newPlot = { ...action.payload, simulations: simulationData };
      return { ...state, [action.payload.id]: newPlot };
      // const oldPlots = state.plots;
      // return {
      //   ...state,
      //   [oldPlots]: [...oldPlots, action.payload],
      // };
    }
    case FETCH_PLOTS: {
      const fetchedData = getPlots(action.payload);
      console.log(fetchedData);
      return {
        ...state,
        ...fetchedData,
      };
    }
    case UPDATE_PLOT: {
      console.log(state);
      const currentPlot = Object.values(state).find(
        (plot) => plot.id === action.payload.plotId
      );
      currentPlot.simulations = {
        ...currentPlot.simulations,
        ...action.payload.data,
      };
      return { ...state, [currentPlot.id]: currentPlot };
    }
    default:
      return state;
  }
};

const getPlots = (payload) => {
  if (!payload) {
    return initialState;
  }

  const payloadData = payload[0]?.data;

  const payloadPoints = payloadData ? payloadData[0]?.points : null;
  const payloadLines = payloadData ? payloadData[0]?.lines : null;
  return {
    data: payload,
    currentIds: [payloadData[0]?.id],
    variableId: payloadData ? payloadData[0]?.id : null,
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
