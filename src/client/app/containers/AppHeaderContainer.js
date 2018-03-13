import { connect } from 'react-redux'
import _ from 'underscore';

import AppHeader from '_components/AppHeader';

const mapStateToProps = state => {
  return { store: _.pick(state, 'domains', 'methods', 'headers', 'protocols') };
}

const AppHeaderContainer = connect(mapStateToProps)(AppHeader);

export default AppHeaderContainer;