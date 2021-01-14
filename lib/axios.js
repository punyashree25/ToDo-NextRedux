import Axios from 'axios'
import Cookies from 'js-cookie'
const token = Cookies.get('token')

// let urls = {
//   test: 'https://api-nodejs-todolist.herokuapp.com/',
//   production: 'https://api-nodejs-todolist.herokuapp.com/',
//   development: 'https://api-nodejs-todolist.herokuapp.com/',
// }

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  // 'Connection' : 'keep-alive'
}

if (token) {
  headers.Authorization = `Bearer ${token}`
}

const axios = Axios.create({
  baseURL: 'https://api-nodejs-todolist.herokuapp.com/',
  headers: headers
});

export default axios;
