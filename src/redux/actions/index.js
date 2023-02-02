import { ADD_EMAIL } from "../actions/actionsTypes";

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: {
    email: email,
  },
});
