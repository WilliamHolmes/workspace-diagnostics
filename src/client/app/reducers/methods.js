import { methods as initalState } from './state';

import { getFail, getPass } from './utils';

const methods = (state = initalState, action) => {
  const { data, type } = action;
  switch (type) {
    case 'METHOD_PASS':
      return state.map(obj => (obj.method === data.method) ? getPass(data) : obj)
    case 'METHOD_FAIL':
      return state.map(obj => (obj.method === data.method) ? getFail(data) : obj)
    case 'RESET':
      return initalState
    default:
      return state
  }
}

export default methods;