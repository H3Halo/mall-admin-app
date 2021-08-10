import axios from 'axios';
import store from './store';

// 创建一个axios实例
const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});
// 创建请求拦截器
instance.interceptors.request.use((config) => {
  if (config.url.includes('/passport')) {
    return config;
  }
  return {
    ...config,
    params: {
      ...config.params,
      appkey: store.state.user.appkey,
    },
  };
}, (err) => Promise.reject(err));
// 响应拦截器
instance.interceptors.response.use((response) => {
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
}, (err) => Promise.reject(err));
export default instance;
