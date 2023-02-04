import { ADD_EMAIL, REQUEST_STARTED, REQUEST_SUCCESSFUL,
  REQUEST_FAILED } from './actionsTypes';

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

export const requestApi = () => {
  const api = fetch('https://economia.awesomeapi.com.br/json/all');
  return (dispatch) => {
    dispatch(requestStarted());
    api.then((response) => response.json())
      .then((results) => dispatch(requestSuccessful(Object.keys(results))))
      .catch((error) => dispatch(requestFailed(error)));
  };
};
