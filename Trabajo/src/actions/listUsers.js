import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    saveUser: ['index']
  },
  {
    prefix: 'LIST/'
  }
);

const { saveUser } = Creators;
const { SAVE_USER } = Types;

export { saveUser, SAVE_USER };
