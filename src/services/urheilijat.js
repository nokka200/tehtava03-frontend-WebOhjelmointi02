import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/urheilijat';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export { getAll };