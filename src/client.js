// @flow

import stdrpc from 'stdrpc';
import zGetStore from './store';
import {
  // setAuthConfig,
  // resetAuthConfig,
  zGetTotalBalance,
  zListAddresses,
  zListTransactions,
} from './actions';

export default class zClient {
  constructor() {
    this.store = zGetStore();
    const { config } = this.store.getState();

    this.rpc = stdrpc({ ...config });
  }

  store: Object;

  rpc: Object;

  z_listtransactions = () => this.store.dispatch(zListTransactions());

  z_listaddresses = () => this.store.dispatch(zListAddresses());

  z_gettotalbalance = (address: number) => this.store.dispatch(zGetTotalBalance(address));
  // z_shieldcoinbase = (from: number, to: number) => this.rpc.z_shieldcoinbase(from, to);

  // z_sendmany = (
  //   from: string,
  //   amounts: number,
  //   minconf: number = 1,
  //   fee: number = 0.0001,
  // ) => this.rpc.z_sendmany(
  //   from,
  //   amounts,
  //   minconf,
  //   fee,
  // );

  z_listtransactions = (
    // count: number = 10,
    // from: number = 0,
    // includeWatchOnly: boolean = false,
  ) => this.store.dispatch(zListTransactions(
    // '*',
    // count,
    // from,
    // includeWatchOnly,
  ));
}
