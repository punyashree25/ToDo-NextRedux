import axios from 'axios';
import store from '../store';
import Cookies from 'js-cookie'

const token = Cookies.get('token')

export const axiosSetup = function () {
  axios.defaults.baseURL = 'https://api-nodejs-todolist.herokuapp.com/'
  axios.defaults.headers['Content-Type'] = 'application/json'
  // axios.defaults.headers['Accept'] = 'application/json'
  // axios.defaults.headers['Accept'] = '*'
  // if (token) {
  //   axios.defaults.headers['Authorization'] = `Bearer ${token}`
  //   console.log(axios.defaults.headers);
  //   console.log(token);
  // }
};


axios
  .interceptors
  .request
  .use((config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
      console.log(axios.defaults.headers);
      console.log(token);
    }
    return config;
  });

axios
  .interceptors
  .response
  .use((response) => {
    // place for success code
    return response;
  }, (error) => {
    const { response } = error;
    const { status } = response;
    // if (status === 401) {
    //   store.dispatch(localCleanup());
    // }
    return Promise.reject(error);
  });
