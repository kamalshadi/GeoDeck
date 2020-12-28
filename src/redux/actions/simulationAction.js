import * as types from "../types";

export const fetchSimulations = () => async (dispatch) => {
  //   const response = await api.get("/sims");
  const response = getSims;
  dispatch({
    type: types.FETCH_SIMULATIONS,
    payload: response.data,
  });
};

export const fetchSimulation = (id) => async (dispatch) => {
  //   const response = await api.get("`/sims/${id}`);
  const response = { data: getSims.data.filter((sim) => sim.id === id) };
  dispatch({
    type: types.FETCH_SIMULATION,
    payload: response.data,
  });
};

const getParameters = [
  {
    label: "Grid Blocks",
    value: 652620,
    unit: "number",
    max: "infinity",
    min: 1000,
  },
  {
    label: "Time Step Size",
    value: 1,
    unit: "second",
    max: "infinity",
    min: 0.001,
  },
  {
    label: "Time Duration",
    value: 1,
    unit: "second",
    max: "infinity",
    min: 86400,
  },
  {
    label: "Number of wells",
    value: 4,
    unit: "number",
    max: 100,
    min: 1,
  },
  {
    label: "Gas Injection Rate",
    value: 35,
    unit: "SCF/day",
    max: "infinity",
    min: 0,
  },
  {
    label: "Water Injection Rate",
    value: 35,
    unit: "STB/day",
    max: "infinity",
    min: 0,
  },
  {
    label: "Rock Heat Capacity",
    value: 0.21,
    unit: "BTU/(lb degF)",
    max: 0.6,
    min: 0.1,
  },
  {
    label: "Rock Thermal Conductivity",
    value: 1,
    unit: "BTU/(hr ft degF)",
    max: 2,
    min: 0.5,
  },
];

const getSims = {
  data: [
    {
      id: 1,
      name: "simulation 1",
      color: "#1f8705",
      parameters: getParameters,
    },
    {
      id: 2,
      name: "simulation 2",
      color: "#1f8705",
      parameters: getParameters,
    },
    {
      id: 3,
      name: "simulation 3",
      color: "#1f8705",
      parameters: getParameters,
    },
  ],
};
