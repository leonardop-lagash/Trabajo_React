import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    importUsers: ['e'],
    saveUser: ['index'],
    editUser: ['index'],
    deleteUser: ['index']
  },
  {
    prefix: 'RANDOM/'
  }
);

const { importUsers, saveUser, editUser, deleteUser } = Creators;

const { IMPORT_USERS, SAVE_USER, EDIT_USER, DELETE_USER } = Types;

export {
  importUsers,
  saveUser,
  editUser,
  deleteUser,
  IMPORT_USERS,
  SAVE_USER,
  EDIT_USER,
  DELETE_USER
};
