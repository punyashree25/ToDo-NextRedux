import Axios from 'axios'
import Cookies from 'js-cookie'
const token = Cookies.get('token')

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

if (token) {
  headers.Authorization = `Bearer ${token}`
}

const axios = Axios.create({
  baseURL: 'https://api-nodejs-todolist.herokuapp.com/',
  headers: headers
});

export default axios;
