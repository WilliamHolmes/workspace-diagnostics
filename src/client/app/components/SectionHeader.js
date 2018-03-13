import React, { Component } from 'react';
import { render } from 'react-dom';


const SectionHeader = ({ type }) => (
  <div className={'header-row row'}>
    <span className={'cell primary'}>{'Status'}</span>
    <span className={'cell'}>{type}</span>
    <span className={'cell'}>{'Details'}</span>
    <span className={'cell'}>{'Time'}</span>
  </div>
)

export default SectionHeader