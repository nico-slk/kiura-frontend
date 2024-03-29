import constants from '../context/constants';

const { HOST } = constants;

export const login = async (body) => {
  console.log(body);
  console.log(HOST + '/login');
  const fetchData = await fetch(HOST + '/login', {
    method: 'post',
    body: body
  });
  const data = await fetchData.json();
  console.log(data);
  return data;
};


