import axios from 'axios';
import { physicalDevice } from '~/util/constants/address';

const api = axios.create({
  baseURL: `http://${physicalDevice}:3333`,
});

export default api;
