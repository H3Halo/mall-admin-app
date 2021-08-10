import axios from '../axios';

// 用户接口管理
export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
  searchCategory(params) {
    return axios.get('/category/all', { params });
  },
  searchProducts(params) {
    return axios.get('/products/all', { params });
  },
  remove(params) {
    return axios.delete(`/products/${params.id}`);
  },
  edit(params) {
    return axios.put('/products/edit', params);
  },
  add(params) {
    return axios.post('/products/add', params);
  },
  detail(id) {
    return axios.get(`/products/${id}`);
  },
};
