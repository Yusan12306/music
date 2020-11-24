import axios from 'axios'

axios.defaults.baseURL = 'http://www.cootaint.com/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default axios