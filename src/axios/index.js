import axios from 'axios';

const AxiosAPI = axios.create({
  timeout: 30000,
});

export default AxiosAPI;
const { get } = AxiosAPI;
export { get };
