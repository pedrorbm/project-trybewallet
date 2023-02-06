import { ADD_EMAIL, REQUEST_STARTED, REQUEST_SUCCESSFUL,
  REQUEST_FAILED, ADD_EXPENSES, REMOVE_EXPENSES } from './actionsTypes';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: {
    email,
  },
});

export const requestStarted = () => ({
  type: REQUEST_STARTED,
});

export const requestSuccessful = (results) => ({
  type: REQUEST_SUCCESSFUL,
  payload: {
    currencies: results.filter((coin) => coin !== 'USDT'),
  },
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  payload: {
    error,
  },
});

export const addExpenses = (object) => ({
  type: ADD_EXPENSES,
  payload: {
    expenses: object,
  },
});

export const removeExpenses = (array) => ({
  type: REMOVE_EXPENSES,
  payload: {
    expenses: array,
  },
});

export const addSum = (number) => ({
  type: ADD_SUM,
  payload: {
    sum: number,
  },
});

export const requestApi = () => {
  const api = fetch('https://economia.awesomeapi.com.br/json/all');
  return (dispatch) => {
    dispatch(requestStarted());
    api.then((response) => response.json())
      .then((results) => dispatch(requestSuccessful(Object.keys(results))))
      .catch((error) => dispatch(requestFailed(error)));
  };
};

export const requestApiExpenses = (object) => {
  const api = fetch('https://economia.awesomeapi.com.br/json/all');
  return (dispatch) => {
    dispatch(requestStarted());
    api.then((response) => response.json())
      .then((results) => dispatch(addExpenses(
        { id: object.id,
          value: object.value,
          currency: object.currency,
          method: object.method,
          tag: object.tag,
          description: object.description,
          exchangeRates: results },
      )))
      .catch((error) => dispatch(requestFailed(error)));
  };
};
