import axios from 'axios';

export default axios.create({
  baseURL: 'https://test.api.spren.com',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': '882a16a7-fb3d-4785-bd5e-c0ca271ef1ba',
  },
});
