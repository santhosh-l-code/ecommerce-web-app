import axios from "axios";

const API = axios.create({
  baseURL: "http://ecommerce-server-production-63eb.up.railway.app/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
