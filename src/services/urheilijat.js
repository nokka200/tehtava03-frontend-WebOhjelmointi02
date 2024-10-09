import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/urheilijat';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const postUrheilija = async (newUrheilija) => {
  const response = await axios.post(baseUrl, newUrheilija);
  return response.data;
};

const deleteUrheilija = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
}

const updateUrheilija = async (urheilija) => {
  const response = await axios.put(`${baseUrl}/${urheilija.id}`, urheilija);
  return response.data;
};

export { getAll, postUrheilija, deleteUrheilija, updateUrheilija };