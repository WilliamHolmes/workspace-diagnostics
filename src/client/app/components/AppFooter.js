import React from 'react';
import Actions from './Actions';

const AppFooter = ({ store }) => (
  <div className={'app-footer'}>
    <Actions store={store}/>
  </div>
)

export default AppFooter