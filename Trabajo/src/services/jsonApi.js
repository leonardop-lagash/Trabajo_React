import { create } from 'apisauce';

const config = {
  baseURL: 'https://randomuser.me/api/'
};

const createApi = () => {
  const { get } = create(config);
  const getResults = () => get('?results=50&inc=name,picture&format=json');

  return {
    getResults
  };
};

export default createApi;
