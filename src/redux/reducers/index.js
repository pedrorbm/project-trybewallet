import user from './user';
import wallet from './wallet';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ user, })

export default rootReducer;

// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
