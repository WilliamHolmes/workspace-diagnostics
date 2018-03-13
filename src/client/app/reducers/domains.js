import { domains as initalState } from './state';

import { getFail, getPass } from './utils';

const domains = (state = initalState, action) => {
  const { data, type } = action;
  switch (type) {
    case 'DOMAIN_PASS':
      return state.map(obj => (obj.domain === data.domain) ? getPass(data) : obj)
    case 'DOMAIN_FAIL':
      return state.map(obj => (obj.domain === data.domain) ? getFail(data) : obj)
    case 'RESET':
      return initalState
    default:
      return state
  }
}

export default domains;