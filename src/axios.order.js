import axios from "axios";
const instance = axios.create({
  baseURL: "https://burgerapp-639ce.firebaseio.com/",
});

export default instance;
