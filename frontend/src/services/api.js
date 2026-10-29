
import axios from "axios";

const API = axios.create({
  baseURL: "https://dom-realty-backend.onrender.com/api",
});

export default API;
