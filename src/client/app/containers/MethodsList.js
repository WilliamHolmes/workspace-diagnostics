import { connect } from 'react-redux'

import { Methods } from '_components/sections';

const mapDispatchToProps = dispatch => {
  return {
    onFail: data => {
      dispatch({ type: 'METHOD_FAIL', data })
    },
    onPass: data => {
      dispatch({ type: 'METHOD_PASS', data })
    },
    onReset: () => {
      dispatch({ type: 'RESET' })
    }
  }
}

const mapStateToProps = state => {
  const { methods } = state;
  return {
    methods
  }
}

const MethodsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Methods);

export default MethodsList;