import { connect } from 'react-redux'
import _ from 'underscore';

import AppFooter from '_components/AppFooter';

const mapStateToProps = state => {
  return { store: _.pick(state, 'domains', 'methods', 'headers', 'protocols') };
}

const AppFooterContainer = connect(mapStateToProps)(AppFooter);

export default AppFooterContainer;