import { REQUEST_SUCCESSFUL, REQUEST_FAILED,
  ADD_EXPENSES, REMOVE_EXPENSES, EDIT, EDIT_EXPENSES } from '../actions/actionsTypes';

const INITIAL_STATE = {
  isFetch: false,
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_SUCCESSFUL:
    return {
      ...state,
      currencies: action.payload.currencies,
      error: '',
    };

  case REQUEST_FAILED:
    return {
      ...state,
      currencies: [],
      error: action.payload.error,
    };

  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
      error: '',
    };

  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: action.payload.expenses,
      error: '',
    };

  case EDIT:
    return {
      ...state,
      editor: action.payload.edit,
      idToEdit: action.payload.id,
    };

  case EDIT_EXPENSES:
    return {
      ...state,
      expenses: action.payload.expenses,
    };

  default:
    return state;
  }
};

export default wallet;
