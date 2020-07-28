import axios from "axios";
import configs from "../utils/configs";

const api = axios.create({
  baseURL: configs.BASE_URL,
});

export default api;
