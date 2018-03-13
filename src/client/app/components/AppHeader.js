import React from 'react';
import Actions from './Actions';

const AppHeader = ({ store }) => (
  <div className={'app-header'}>
    <img src={'/favicon.ico'}/>
    <div className={'app-header-title'}>{'WW Diagnostics DashBoard'}</div>
    <Actions store={store}/>
  </div>
)

export default AppHeader