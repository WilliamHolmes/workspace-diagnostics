import { protocols as initalState } from './state';

import { getFail, getPass } from './utils';

const protocols = (state = initalState, action) => {
  const { data, type } = action;
  switch (type) {
    case 'PROTOCOL_PASS':
      return state.map(obj => (obj.protocol === data.protocol) ? getPass(data) : obj)
    case 'PROTOCOL_FAIL':
      return state.map(obj => (obj.protocol === data.protocol) ? getFail(data) : obj)
    case 'RESET':
      return initalState
    default:
      return state
  }
}

export default protocols;