const { default: axios } = require("axios");
const { BASE_URL } = require("./constants");

const api = axios.create({
  baseURL: BASE_URL
})

api.interceptors.response.user(
  (response) => response,
  (error) => {
    if (error.response?.status === 403 && error.response?.data?.status === "blocked"){
      localStorage.setItem("blocked", true)
      window.location.href = "/blocked"
    }
    return Promise.reject(error)
  }
)

export default api