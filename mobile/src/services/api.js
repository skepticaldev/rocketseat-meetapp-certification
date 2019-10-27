import axios from 'axios';
import { myAddress } from '~/util/constants/address';

const api = axios.create({
  baseURL: `http://${myAddress}:3333`,
});

export default api;
