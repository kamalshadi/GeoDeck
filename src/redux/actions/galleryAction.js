import * as types from "../types";
import _ from "lodash";
import history from "../../history";

export const fetchGalleryItems = () => async (dispatch) => {
  //   const response = await api.get("/users/profile");
  const response = getGalleries;
  dispatch({ type: types.FETCH_GALLERIES, payload: response.data });
};

const getGalleries = {
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
      source: "04.png",
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
    {
      id: 6,
      title: "Well Optimization",
      time: "10/21/2020",
      url: "http://web.com",
      username: "web project",
      collaborationGroup: "Lab Internal",
      description: "this is a web project",
      source: "02.jpg",
    },
    {
      id: 7,
      title: "USA Geothermal",
      time: "11/27/2020",
      url: "http://mail.com",
      username: "mail project",
      collaborationGroup: "Lab Internal",
      description: "this is a mail project",
      source: "04.png",
    },
    {
      id: 8,
      title: "Well Optimization",
      time: "12/01/2020",
      url: "http://example.com",
      username: "example project",
      collaborationGroup: "Lab Internal",
      description: "this is a example project",
      source: "video.webm",
    },
    {
      id: 9,
      title: "USA Geothermal",
      time: "12/18/2020",
      url: "http://archive.com",
      username: "archive project",
      collaborationGroup: "Lab Internal",
      description: "this is a archive project",
      source: null,
    },
    {
      id: 10,
      title: "Well Optimization",
      time: "10/21/2020",
      url: "http://web.com",
      username: "web project",
      collaborationGroup: "Lab Internal",
      description: "this is a web project",
      source: "02.jpg",
    },
    {
      id: 1,
      title: "USA Geothermal",
      time: "11/27/2020",
      url: "http://mail.com",
      username: "mail project",
      collaborationGroup: "Lab Internal",
      description: "this is a mail project",
      source: "04.png",
    },
    {
      id: 12,
      title: "Well Optimization",
      time: "12/01/2020",
      url: "http://example.com",
      username: "example project",
      collaborationGroup: "Lab Internal",
      description: "this is a example project",
      source: "video.webm",
    },
    {
      id: 13,
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