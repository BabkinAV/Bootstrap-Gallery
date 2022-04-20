import axios from "axios";

export const getSingleItem = (itemId) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos/${itemId}`)
    .then((response) => {
      return response.data;
    });
}

export const getGallery = () => {
  return axios
    .get(`http://jsonplaceholder.typicode.com/photos?_start=0&_limit=24`)
    .then((response) => {
      return response.data;
    });
}