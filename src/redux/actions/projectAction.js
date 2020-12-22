import * as types from "../types";
import _ from "lodash";
import history from "../../history";

export const fetchProjects = () => async (dispatch) => {
  //   const response = await api.get("/users/profile");
  const response = getProjects;
  dispatch({ type: types.FETCH_PROJECTS, payload: response.data });
};

export const createProject = (formValues) => async (dispatch) => {
  // const response = await api.post("/project", formValues);
  const response = getCreatedProject(formValues);
  dispatch({ type: types.CREATE_PROJECT, payload: response.data });
};


const getProjects = {
  data: [
    {
      id: 1,
      title: "USA Geothermal",
      time: "09/09/2020",
      url: "http://test.com",
      username: "test project",
      collaborationGroup: "Lab Internal",
      description: "this is a test project",
      source: "01.jpg",
    },
    {
      id: 2,
      title: "Well Optimization",
      time: "10/21/2020",
      url: "http://web.com",
      username: "web project",
      collaborationGroup: "Lab Internal",
      description: "this is a web project",
      source: "02.jpg",
    },
    {
      id: 3,
      title: "USA Geothermal",
      time: "11/27/2020",
      url: "http://mail.com",
      username: "mail project",
      collaborationGroup: "Lab Internal",
      description: "this is a mail project",
      source: "03.jpg",
    },
    {
      id: 4,
      title: "Well Optimization",
      time: "12/01/2020",
      url: "http://example.com",
      username: "example project",
      collaborationGroup: "Lab Internal",
      description: "this is a example project",
      source: "video.webm",
    },
    {
      id: 5,
      title: "USA Geothermal",
      time: "12/18/2020",
      url: "http://archive.com",
      username: "archive project",
      collaborationGroup: "Lab Internal",
      description: "this is a archive project",
      source: null,
    },
  ],
};

const getCreatedProject = (formValues) => {
  const defaultValue = {
    title: "USA Geothermal",
    time: "09/09/2020",
    url: "http://test.com",
    username: "test project",
    collaborationGroup: "Lab Internal",
    description: "this is a test project",
    source: null,
  };
  const values = _.omit(formValues, "password");
  return {data: _.merge(defaultValue, values)};
};
