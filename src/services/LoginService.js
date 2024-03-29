import constants from '../context/constants';

const { HOST } = constants;

export const login = async (body) => {
  const fetchData = await fetch(HOST + '/login', {
    method: 'post',
    body: {
      email: body.email,
      password: body.password
    }
  });
  const data = await fetchData.json();
  return data;
};
