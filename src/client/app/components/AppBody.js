import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StickyContainer, Sticky } from 'react-sticky';

import { DomainsList, HeadersList, MethodsList, ProtocolsList } from '_containers';

require('_sass/default.scss');

const App = () => (
  <div className={'app-body'}>
    <DomainsList/>
    <MethodsList/>
    <ProtocolsList/>
    <HeadersList/>
  </div>
)

export default App;