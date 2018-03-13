import { connect } from 'react-redux'

import { Domains } from '_components/sections';

const mapDispatchToProps = dispatch => {
  return {
    onFail: data => {
      dispatch({ type: 'DOMAIN_FAIL', data })
    },
    onPass: data => {
      dispatch({ type: 'DOMAIN_PASS', data })
    },
    onReset: () => {
      dispatch({ type: 'RESET' })
    }
  }
}

const mapStateToProps = state => {
  const { domains } = state;
  return {
    domains
  }
}

const DomainsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Domains);

export default DomainsList;