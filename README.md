# Zcash Redux

Redux clients for Zcash Daemon

## WARNING

> Library currently under development, will undergo further breaking changes. Not ready for production use.

## Installation

```bash
yarn add zcash-redux
```

or

```bash
npm i zcash-redux
```

## Usage

You can import the reducer into your application and add
it as a child reducer with `combineReducers`:

```js
import { zReducer } from 'zcash-redux';

export default combineReducers({
  header: headerReducer,
  routing: routerReducer,
  ...
  zcash: zReducer,
});
```
