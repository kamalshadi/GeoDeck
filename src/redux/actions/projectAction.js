import * as types from "../types";

export const fetchProjects = () => async (dispatch) => {
  //   const response = await armaghan.get("/users/profile");
  const response = getProjects;
  console.log("call fetchProject -------!");
  dispatch({ type: types.FETCH_PROJECTS, payload: response.data });
};

const getProjects = {
  data: [
    { id: 1, title: "USA Geothermal", time: "09/09/2020", image: "01.jpg" },
    { id: 2, title: "Well Optimization", time: "10/21/2020", image: "02.jpg" },
    { id: 3, title: "USA Geothermal", time: "11/27/2020", image: "03.jpg" },
    { id: 4, title: "Well Optimization", time: "12/01/2020", image: "04.png" },
    { id: 5, title: "USA Geothermal", time: "12/18/2020", image: null },
  ],
};
