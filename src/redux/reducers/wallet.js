import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED,
  ADD_EXPENSES, REMOVE_EXPENSES } from '../actions/actionsTypes';

const INITIAL_STATE = {
  isFetch: false,
  currencies: [],
  expenses: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_STARTED:
    return {
      ...state,
      isFetch: true,
    };

  case REQUEST_SUCCESSFUL:
    return {
      ...state,
      isFetch: false,
      currencies: action.payload.currencies,
      error: '',
    };

  case REQUEST_FAILED:
    return {
      ...state,
      isFetch: false,
      currencies: [],
      error: action.payload.error,
    };

  case ADD_EXPENSES:
    return {
      ...state,
      isFetch: false,
      expenses: [...state.expenses, action.payload.expenses],
      error: '',
    };

  case REMOVE_EXPENSES:
    return {
      ...state,
      isFetch: false,
      expenses: action.payload.expenses,
      error: '',
    };

  default:
    return state;
  }
};

export default wallet;
