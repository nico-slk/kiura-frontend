import constants from '../context/constants';

const { HOST } = constants;

export const getUbications = async () => {
  const fetchData = await fetch(HOST + '/ubication/');
  const data = await fetchData.json();
  return data;
};

export const createUbication = async (body) => {
  const fetchData = await fetch(HOST + '/ubication/', {
    method: 'post',
    body: JSON.stringify(body)
  });
  const data = await fetchData.json();
  return data;
};

export const getubicationByName = async (city) => {
  const fetchData = await fetch(HOST + '/ubication/name/' + city, {
    method: 'get'
  });
  const data = await fetchData.json();
  return data;
};
