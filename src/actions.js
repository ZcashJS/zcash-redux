// @flow

import zClient from './client';

// Action Name Constants
export const SET_AUTH_CONFIG = 'SET_AUTH_CONFIG';
export const RESET_AUTH_CONFIG = 'RESET_AUTH_CONFIG';
export const Z_GET_TOTAL_BALANCE_ERROR = 'Z_GET_TOTAL_BALANCE_ERROR';
export const Z_GET_TOTAL_BALANCE_REQUEST = 'Z_GET_TOTAL_BALANCE_REQUEST';
export const Z_GET_TOTAL_BALANCE_SUCCESS = 'Z_GET_TOTAL_BALANCE_SUCCESS';
export const Z_LIST_ADDRESSES_ERROR = 'Z_LIST_ADDRESSES_ERROR';
export const Z_LIST_ADDRESSES_REQUEST = 'Z_LIST_ADDRESSES_REQUEST';
export const Z_LIST_ADDRESSES_SUCCESS = 'Z_LIST_ADDRESSES_SUCCESS';
export const Z_LIST_TRANSACTIONS_ERROR = 'Z_LIST_TRANSACTIONS_ERROR';
export const Z_LIST_TRANSACTIONS_REQUEST = 'Z_LIST_TRANSACTIONS_REQUEST';
export const Z_LIST_TRANSACTIONS_SUCCESS = 'Z_LIST_TRANSACTIONS_SUCCESS';

const client = new zClient(); // eslint-disable-line

export const setAuthConfig = (config: Object) => ({
  type: SET_AUTH_CONFIG,
  payload: {
    config,
  },
});

export const resetAuthConfig = (config: Object) => ({
  type: RESET_AUTH_CONFIG,
  payload: {
    config,
  },
});

// Get Total Balance
export const zGetTotalBalanceRequest = () => ({
  type: Z_GET_TOTAL_BALANCE_REQUEST,
  payload: {},
});
export const zGetTotalBalanceError = (error: Object) => ({
  type: Z_GET_TOTAL_BALANCE_ERROR,
  payload: { error },
});
export const zGetTotalBalanceSuccess = (data: Object) => ({
  type: Z_GET_TOTAL_BALANCE_SUCCESS,
  payload: { data },
});
export const zGetTotalBalance = (address: number) => (dispatch: Function) => {
  dispatch(zGetTotalBalanceRequest());

  return client.z_gettotalbalance(address)
    .then(response => dispatch(zGetTotalBalanceSuccess(response)))
    .catch(err => dispatch(zGetTotalBalanceError(err)));
};

// List Addresses
export const zListAddressesRequest = () => ({
  type: Z_LIST_ADDRESSES_REQUEST,
  payload: {},
});
export const zListAddressesError = (error: Object) => ({
  type: Z_LIST_ADDRESSES_ERROR,
  payload: { error },
});
export const zListAddressesSuccess = (data: Object) => ({
  type: Z_LIST_ADDRESSES_SUCCESS,
  payload: { data },
});
export const zListAddresses = () => (dispatch: Function) => {
  dispatch(zListAddressesRequest());

  return client.z_listaddresses()
    .then(response => dispatch(zListAddressesSuccess(response)))
    .catch(err => dispatch(zListAddressesError(err)));
};

// List Transactions
export const zListTransactionsRequest = () => ({
  type: Z_LIST_TRANSACTIONS_REQUEST,
  payload: {},
});
export const zListTransactionsError = (error: Object) => ({
  type: Z_LIST_TRANSACTIONS_ERROR,
  payload: { error },
});
export const zListTransactionsSuccess = (data: Object) => ({
  type: Z_LIST_TRANSACTIONS_SUCCESS,
  payload: { data },
});
export const zListTransactions = () => (dispatch: Function) => {
  dispatch(zListTransactionsRequest());

  return client.z_listtransactions()
    .then(response => dispatch(zListTransactionsSuccess(response)))
    .catch(err => dispatch(zListTransactionsError(err)));
};

export default {
  setAuthConfig,
  resetAuthConfig,
  zGetTotalBalance,
  zListAddresses,
  zListTransactions,
};
