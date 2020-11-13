import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // "https://jsonplaceholder.typicode.com/users",
});
