import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StickyContainer, Sticky } from 'react-sticky';

import AppBody from './AppBody';

import { AppFooterContainer, AppHeaderContainer, DomainsList, HeadersList, MethodsList, ProtocolsList } from '_containers';

require('_sass/default.scss');

const App = () => (
  <MuiThemeProvider>
    <AppHeaderContainer/>
    <AppBody/>
    <AppFooterContainer/>
  </MuiThemeProvider>
)

export default App;