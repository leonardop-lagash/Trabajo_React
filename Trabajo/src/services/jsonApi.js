import { create } from 'apisauce';

const config = {
  baseURL: 'https://randomuser.me/api/'
};

const createApi = () => {
  const { get } = create(config);
  const getUsers = () =>
    get('?results=50&inc=name,picture,login,email&format=json');

  return {
    getUsers
  };
};

export default createApi;
