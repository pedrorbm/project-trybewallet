import { ADD_EMAIL } from "../actions/actionsTypes";

const INITIAL_STATE = {
  email: '',
}

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EMAIL:
      return {
        ...state,
        ...action.payload, 
      };
    default:
      return state;
    };
};

export default user;
