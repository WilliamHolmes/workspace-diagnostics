import { headers as initalState } from './state';

import { getFail, getPass } from './utils';

const headers = (state = initalState, action) => {
  const { data, type } = action;
  switch (type) {
    case 'HEADER_PASS':
      return state.map(obj => (obj.header === data.header) ? getPass(data) : obj)
    case 'HEADER_FAIL':
      return state.map(obj => (obj.header === data.header) ? getFail(data) : obj)
    case 'RESET':
      return initalState
    default:
      return state
  }
}

export default headers;