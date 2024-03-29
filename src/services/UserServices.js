import constants from '../context/constants';

const { HOST } = constants;

export const getUsers = async () => {
  const fetchData = await fetch(HOST + '/user');
  const data = await fetchData.json();
  return data;
};

export const createUser = async (body) => {
  const fetchData = await fetch(HOST + '/user', {
    method: 'post',
    body: JSON.stringify(body)
  });
  const data = await fetchData.json();
  return data;
};

// export const updateUser = async (id) => {
//   const fetchData = await fetch(HOST + id, {
//     method: 'patch',
//   });
//   const data = await fetchData.json();
// };

// export const deleteUser = async () => {
//   const fetchData = await fetch(HOST);
//   const data = await fetchData.json();
// };
