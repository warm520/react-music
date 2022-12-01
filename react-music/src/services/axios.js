/**
 * axios.j对axios进行封装，设置拦截器
 */
import axios from "axios";
import { NProgress } from "nprogress";
import { BASE_URL } from "./config";

const axiosAPI = axios.create({
  baseURL:BASE_URL
})

// 请求拦截器
axiosAPI.interceptors.request.use((config)=>{
  NProgress.start() //滚动条开始
  return config;
})

// 响应拦截器
axiosAPI.interceptors.response.use(
  (res)=>{
    NProgress.done() //滚动条结束
    return res.data
  },
  (err)=>{
    if(err && err.response){
      switch(err.response.status){
        case 400:
          console.log('请求错误')
          break
        case 401:
          console.log('未授权访问')
          break
        default:
          console.log('其他错误信息')
      }
    }
    return err
  }
)

export default axiosAPI