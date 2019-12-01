import { create } from 'apisauce';

const config = {
  baseURL: 'https://randomuser.me/api/?results=50'
};

const createApi = () => {
  const { get } = create(config);
  const getUsers = () => get('users');

  return {
    getUsers
  };
};

export default createApi;
