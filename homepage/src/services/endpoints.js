import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000", // change before of production
  withCredentials: false,
  headers: {
    Accept: "applicacion/json",
    "Content-Type": "application/json",
  },
});

export default {
  //getId
  login(data) {
    return apiClient.post("/login", data);
  },
};