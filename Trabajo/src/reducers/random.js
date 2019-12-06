import { createReducer } from 'reduxsauce';
import produce from 'immer';

import {
  SAVE_USER,
  EDIT_USER,
  DELETE_USER,
  IMPORT_USERS
} from '../actions/random';

const INITIAL_STATE = {
  users: [],
  savedUsers: []
};

const importUsers = produce((draft, { e }) => {
  e.forEach(element => {
    draft.users.push(element);
  });
});

const saveUser = produce((draft, { index }) => {
  draft.savedUsers.push(draft.users[index]);
  draft.users = draft.users.filter((u, i) => i !== index);
});

// eslint-disable-next-line no-unused-vars
const editUser = produce((draft, { index }) => {
  alert('Aún no funciona we xD');
});

const deleteUser = produce((draft, { index }) => {
  draft.savedUsers = draft.savedUsers.filter((u, i) => i !== index);
});

const reducer = createReducer(INITIAL_STATE, {
  [IMPORT_USERS]: importUsers,
  [SAVE_USER]: saveUser,
  [EDIT_USER]: editUser,
  [DELETE_USER]: deleteUser
});

export default reducer;
