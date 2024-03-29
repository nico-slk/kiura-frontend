import constants from '../context/constants';

const { HOST } = constants;

export const getUbications = async () => {
  const fetchData = await fetch(HOST + '/ubication');
  const data = await fetchData.json();
  return data;
};

export const createUser = async (body) => {
  const fetchData = await fetch(HOST, {
    method: 'post',
    body: JSON.stringify(body)
  });
  const data = await fetchData.json();
  return data;
};
