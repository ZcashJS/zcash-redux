// Action Name Constants
export const SET_AUTH_CONFIG = 'SET_AUTH_CONFIG';
export const RESET_AUTH_CONFIG = 'RESET_AUTH_CONFIG';
export const Z_GET_TOTAL_BALANCE = 'Z_GET_TOTAL_BALANCE';
export const Z_LIST_ADDRESSES = 'Z_LIST_ADDRESSES';
export const Z_LIST_TRANSACTIONS = 'Z_LIST_TRANSACTIONS';

export const setAuthConfig = (config) => ({
  type: SET_AUTH_CONFIG,
  payload: {
    config,
  },
});

export const resetAuthConfig = (config = {}) => ({
  type: RESET_AUTH_CONFIG,
  payload: {
    config,
  },
});

export const zGetTotalBalance = () => ({
  type: Z_GET_TOTAL_BALANCE,
  payload: {
    data,
  },
});

export const zListAddresses = () => ({
  type: Z_LIST_ADDRESSES,
  payload: {
    data,
  },
});

export const zListTransactions = () => ({
  type: Z_LIST_TRANSACTIONS,
  payload: {
    data,
  },
});