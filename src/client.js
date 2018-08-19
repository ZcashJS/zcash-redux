// @flow

import stdrpc from 'stdrpc';
import zGetStore from './store';
import zActions from './actions';

export default class zClient {
  constructor() {
    this.store = zGetStore();

    const { zcash_client_config, zcash_auth } = this.store.getState();

    this.rpc = stdrpc({
      ...zcash_auth,
      ...zcash_client_config,
    });
  }

  store: Object;
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
