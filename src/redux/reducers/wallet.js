import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED }
  from '../actions/actionsTypes';

const INITIAL_STATE = {
  isFetch: false,
  currencies: [],
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

  default:
    return state;
  }
};

export default wallet;
