import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "http://localhost:8080/api";

export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },
  register(correo, password) {
    const user = { correo, password };
    return axios.post(ENDPOINT_PATH + "/usuario/new", user);
  },
  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  }
};