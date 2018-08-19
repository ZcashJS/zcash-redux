# zcash-redux

Redux clients for Zcash Daemon

## Installation

```bash
npm install zcash-redux
```

or

```bash
yarn add zcash-redux
```

## Usage

You can import the reducer into your application and add
it as a child reducer with `combineReducers`:

```js
import { zReducer } from 'zcash-redux';
```

You can also instantiate your Redux store directly with the `zGetStore` helper:

```js
import { zGetStore } from 'zcash-redux';

const options = {
  zcash_auth: {
    username: 'myrpcusername',
    password: 'myrpcpassword',
  },
  zcash_client_config: {
    url: 'http://localhost:8232',
  },
};

const store = zGetStore(options);
```

You can use the stateful client to make RPC calls which affect the store.
Import the client, instantiate it and set the auth
(and optionally the zcash_client_config).

```js
import {
  zClient,
  zActions,
} from 'zcash-redux';

const client = new zClient();

// set zcash_auth and zcash_client_config if not already in the store
client.dispatch({
  type: 'SET_ZCASH_AUTH',
  username: 'myrpcusername',
  password: 'myrpcpassword',
})
// http://localhost:8232 is the default so you may not have to do this
client.dispatch({
  type: 'SET_ZCASH_CLIENT_CONFIG',
  client_config: {
    url: 'http://localhost:8232',
  },
});
```

Now you can interact with zcashd:

```js
client.z_gettotalbalance().then((info) => console.log(info));
```

This stores the return data in an attribute of the same name.
So, any component that wants to use this data can:

```js
connect((state) => ({
  z_gettotalbalance: state.z_gettotalbalance,
}))(MyComponent);
```
