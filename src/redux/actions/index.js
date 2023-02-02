import { ADD_EMAIL } from './actionsTypes';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: {
    email,
  },
});
