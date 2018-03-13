import { combineReducers } from 'redux';

import domains from './domains';
import headers from './headers';
import methods from './methods';
import protocols from './protocols';

const reducers = combineReducers({
  domains,
  headers,
  methods,
  protocols
})

export default reducers;
