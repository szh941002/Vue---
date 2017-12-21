// 导入axios
import axios from 'axios' ;
import { domain } from './api_config.js'  ;

axios.defaults.baseURL = domain ;
axios.defaults.withCredentials = true ;   //可以携带cookies 进行跨域

// 导出axios
export default axios ;