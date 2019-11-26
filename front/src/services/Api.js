import axios from 'axios';

export default () => axios.create({
  baseURL: '/',
  withCredentials: true,
  // mode: 'no-cors',
  credentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
