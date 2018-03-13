import { connect } from 'react-redux'

import { Protocols } from '_components/sections';

const mapDispatchToProps = dispatch => {
  return {
    onFail: data => {
      dispatch({ type: 'PROTOCOL_FAIL', data })
    },
    onPass: data => {
      dispatch({ type: 'PROTOCOL_PASS', data })
    },
    onReset: () => {
      dispatch({ type: 'RESET' })
    }
  }
}

const mapStateToProps = state => {
  const { protocols } = state;
  return {
    protocols
  }
}

const ProtocolsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Protocols);

export default ProtocolsList;