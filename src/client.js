// @flow

import stdrpc from 'stdrpc';
import zGetStore from './store';

export default class zClient {
  constructor() {
    const store = zGetStore();
    const { config } = store.getState();

    this.rpc = stdrpc({ ...config });
  }

  rpc: Object;

  z_listtransactions = () => this.rpc.z_listtransactions();

  z_listaddresses = () => this.rpc.z_listaddresses();

  z_gettotalbalance = (address: number) => this.rpc.z_getbalance(address);

  z_shieldcoinbase = (from: number, to: number) => this.rpc.z_shieldcoinbase(from, to);

  z_sendmany = (
    from: string,
    amounts: number,
    minconf: number = 1,
    fee: number = 0.0001,
  ) => this.rpc.z_sendmany(
    from,
    amounts,
    minconf,
    fee,
  );

  z_listtransactions = (
    count: number = 10,
    from: number = 0,
    includeWatchOnly: boolean = false,
  ) => this.rpc.listtransactions(
    '*',
    count,
    from,
    includeWatchOnly,
  );
}
