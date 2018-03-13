import { connect } from 'react-redux'

import { Headers } from '_components/sections';

const mapDispatchToProps = dispatch => {
  return {
    onFail: data => {
      dispatch({ type: 'HEADER_FAIL', data })
    },
    onPass: data => {
      dispatch({ type: 'HEADER_PASS', data })
    },
    onReset: () => {
      dispatch({ type: 'RESET' })
    }
  }
}

const mapStateToProps = state => {
  const { headers } = state;
  return {
    headers
  }
}

const HeadersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Headers);

export default HeadersList;