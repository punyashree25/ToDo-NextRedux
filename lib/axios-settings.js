import axios from 'axios'
import Cookies from 'js-cookie'

const token = Cookies.get('token')

export const axiosSetup = function () {
  axios.defaults.baseURL = 'https://api-nodejs-todolist.herokuapp.com/'
  axios.defaults.headers['Content-Type'] = 'application/json'
};

axios
  .interceptors
  .request
  .use((config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  });

axios
  .interceptors
  .response
  .use((response) => {
    return response;
  }, (error) => {
    const { response } = error;
    const { status } = response;
    return Promise.reject(error);
  });
