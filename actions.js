// @flow

// Action Name Constants
export const SET_AUTH_CONFIG = 'SET_AUTH_CONFIG';
export const RESET_AUTH_CONFIG = 'RESET_AUTH_CONFIG';
export const Z_GET_TOTAL_BALANCE = 'Z_GET_TOTAL_BALANCE';
export const Z_LIST_ADDRESSES = 'Z_LIST_ADDRESSES';
export const Z_LIST_TRANSACTIONS = 'Z_LIST_TRANSACTIONS';

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

export const zGetTotalBalance = () => ({
  type: Z_GET_TOTAL_BALANCE,
  payload: {},
});

export const zListAddresses = () => ({
  type: Z_LIST_ADDRESSES,
  payload: {},
});

export const zListTransactions = () => ({
  type: Z_LIST_TRANSACTIONS,
  payload: {},
});

export default {
  setAuthConfig,
  resetAuthConfig,
  zGetTotalBalance,
  zListAddresses,
  zListTransactions,
};
