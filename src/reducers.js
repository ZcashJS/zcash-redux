// @flow

import { combineReducers } from 'redux';
import {
  SET_AUTH_CONFIG,
  RESET_AUTH_CONFIG,
  Z_GET_TOTAL_BALANCE_ERROR,
  // Z_GET_TOTAL_BALANCE_REQUEST,
  Z_GET_TOTAL_BALANCE_SUCCESS,
  Z_LIST_ADDRESSES_ERROR,
  // Z_LIST_ADDRESSES_REQUEST,
  Z_LIST_ADDRESSES_SUCCESS,
  Z_LIST_TRANSACTIONS_ERROR,
  // Z_LIST_TRANSACTIONS_REQUEST,
  Z_LIST_TRANSACTIONS_SUCCESS,
} from './actions';

type Action = {
  type: string,
  payload: Object,
}

const DEFAULT_AUTH_CONFIG = {
  username: '',
  password: '',
  url: 'http://localhost:8232',
};

// Authentation / Config
const config = (state: Object = DEFAULT_AUTH_CONFIG, action: Action) => {
  switch (action.type) {
    case SET_AUTH_CONFIG:
      return { ...action.payload };
    case RESET_AUTH_CONFIG:
      return DEFAULT_AUTH_CONFIG;
    default:
      return state;
  }
};

// Wallet Transactions
const transactions = (state: Array<*> = [], action) => {
  switch (action.type) {
    case Z_LIST_TRANSACTIONS_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
};

// Wallet Total Balance
const balance = (state: Object = {}, action: Action) => {
  switch (action.type) {
    case Z_GET_TOTAL_BALANCE_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};

// Wallet Addresses
const addresses = (state: Array<*> = [], action: Action) => {
  switch (action.type) {
    case Z_LIST_ADDRESSES_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};

// Error
const error = (state: Object = {}, action: Action) => {
  switch (action.type) {
    case Z_LIST_ADDRESSES_ERROR:
    case Z_LIST_TRANSACTIONS_ERROR:
    case Z_GET_TOTAL_BALANCE_ERROR:
      return { ...action.payload };
    default:
      return state;
  }
};

// Root Reducer
export default combineReducers({
  config,
  transactions,
  balance,
  addresses,
  error,
});
