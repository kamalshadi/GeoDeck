import * as types from "../types";

export const fetchPlots = () => async (dispatch) => {
  //   const response = await api.get("/plots");
  const response = { data: getSimsT };
  dispatch({ type: types.FETCH_PLOTS, payload: response.data });
};

// update redux state in brawser
export const editPlot = (editObject) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PLOT, payload: editObject });
};

// update info in server -> dispatch in simulationReducer
export const editPlotSimulation = (formValues, id) => async (
  dispatch,
  getState
) => {
  // const response = await api.patch(`/plot/${id}`, formValues); // return updated simulation object
  const plots = getState().plots;
  const newSimulation = plots.find((plot) => plot.id === id);
  const response = { data: newSimulation };
  dispatch({ type: types.UPDATE_SIMULATION, payload: response.data });
};





const pointsData = [
  1864.8666666666666,
  1867.143027497194,
  1860.1281144781146,
  1262.820270253036,
  1269.5741786552392,
  1262.2559322178006,
  1261.9093306805426,
  1269.5950593901285,
  1265.7641266806104,
  1261.4484147025812,
  1265.5806584362133,
  1269.4467805155932,
  1262.6034256708492,
  1265.180801066218,
  1267.6295548073324,
  1269.8152707631875,
  1262.6798838553889,
  1264.8664751470942,
  1266.5793911335575,
  1268.1174244549875,
  1269.5963328571209,
  1261.0215711407,
  1262.4284575553518,
  1263.6922686460566,
  1264.9751428425668,
];


const pointsData1 = [
  1854.6666666286,
  1857.430274286,
  1880.2811447286,
  1902.202702286,
  1919.7417865286,
  1932.5593221286,
  1941.0933068286,
  1949.9505939286,
  1955.6419668286,
  1961.4841470286,
  1965.8065843286,
  1969.4678051286,
  1972.0342567286,
  1975.808010286,
  1977.2955480286,
  1979.1527076286,
  1982.7988385286,
  1984.6647514286,
  1986.7939113286,
  1988.1742445286,
  1989.9633285286,
  1991.2157286,
  1992.2845755286,
  1993.9226864286,
  1994.7514284286,
];

const pointsData2 = [
  754.8666666666666,
  1557.143027497194,
  880.1281144781146,
  302.820270253036,
  919.5741786552392,
  1732.2559322178006,
  241.9093306805426,
  249.5950593901985,
  755.7641966806104,
  461.4484147025812,
  1765.5806584362133,
  1969.4467805155932,
  1572.6034256708492,
  1375.180801066218,
  1277.6295548073324,
  1479.8152707631875,
  782.6798838553889,
  384.8664751470942,
  686.5793911335575,
  788.1174244549875,
  1189.5963328571909,
  591.0215711407,
  692.4284575553518,
  793.6922686460566,
  894.9751428425668,
];

const pointsData3 = [
  1804.6666666666,
  1857.027497194,
  1746.1144781146,
  1493.270253036,
  1349.1786552392,
  756.9322178006,
  1349.3306805426,
  1497.0593901985,
  1439.1966806104,
  1763.4147025812,
  685.6584362133,
  486.7805155932,
  749.4256708492,
  1863.801066218,
  354.5548073324,
  1796.2707631875,
  1357.8838553889,
  983.4751470942,
  567.3911335575,
  1816.4244549875,
  165.3328571909,
  758.5711407,
  725.4575553518,
  597.2686460566,
  1994.1428425668,
];

const getSimsT = [
  {
    id: 1,
    name: "simulation 1",
    data: [
      {
        id: 1,
        name: "pressure",
        points: [
          {
            id: 1,
            name: "Near Well 1 sim 1",
            data: pointsData,
          },
          {
            id: 2,
            name: "Right Bell sim 1",
            data: pointsData2,
          },
        ],
        lines: [
          {
            id: 1,
            name: "Near Well 1 sim 1",
            data: pointsData,
          },
        ],
      },

      {
        id: 2,
        name: "temperature",
        points: [
          {
            id: 1,
            name: "Near Well 1",
            data: pointsData3,
          },
          {
            id: 2,
            name: "Right Bell",
            data: pointsData1,
          },
        ],
        lines: [
          {
            id: 1,
            name: "Near Well 1",
            data: pointsData2,
          },
        ],
      },

      {
        id: 3,
        name: "saturation",
        points: [
          {
            id: 1,
            name: "Near Well 1",
            data: pointsData3,
          },
          {
            id: 2,
            name: "Right Bell",
            data: pointsData1,
          },
        ],
        lines: [
          {
            id: 1,
            name: "Near Well 1",
            data: pointsData2,
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "simulation 2",
    data: [
      {
        id: 1,
        name: "pressure",
        points: [
          {
            id: 1,
            name: "Near Well 1 sim 2",
            data: pointsData3,
          },
          {
            id: 2,
            name: "Right Bell sim 2",
            data: pointsData1,
          },
        ],
        lines: [
          {
            id: 1,
            name: "Near Well 1 sim 2",
            data: pointsData2,
          },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "simulation 3",
    data: [
      {
        id: 1,
        name: "pressure",
        points: [
          {
            id: 1,
            name: "Near Well 1 sim 3",
            data: pointsData2,
          },
          {
            id: 2,
            name: "Right Bell sim 3",
            data: pointsData3,
          },
          {
            id: 3,
            name: "Left Bell sim 3",
            data: pointsData1,
          },
          {
            id: 4,
            name: "Top Bell sim 3",
            data: pointsData,
          },
        ],
        lines: [
          {
            id: 1,
            name: "Near Well 1 sim 3",
            data: pointsData3,
          },
        ],
      },
    ],
  },
];
