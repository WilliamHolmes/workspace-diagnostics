import React, { Component } from 'react';
import { render } from 'react-dom';
import { StickyContainer } from 'react-sticky';
import _ from 'underscore';

import processData from '_comms';

import CaptionTitle from '_components/CaptionTitle';
import SectionHeader from '_components/SectionHeader';

import HeaderRow from './rows/HeaderRow';

export default class Headers extends Component {
  componentWillMount() {
    const { headers, onFail, onPass } = this.props;
    this.setCookie()
    _.each(headers, data => processData(data).then(onPass).catch(onFail))
  }

  setCookie() {
    const date = new Date();
    const now = date.getTime();
    date.setTime(date.getTime()+(10000));
    const expires = `expires=${date.toGMTString()}`;
    document.cookie = `ww_test=${now}; expires=${expires}; path=/`;
  }

  render() {
    const { headers } = this.props;
    return (
      <StickyContainer className={'headers-list'}>
        <CaptionTitle caption={'HTTP Request Headers'} />
        <div id={'table'}>
          <SectionHeader type={'Header'} />
          {
            _.chain(headers)
            .sortBy('header')
            .map((data, index) => <HeaderRow key={`header_${index}`} { ...data } />)
            .value()
          }
        </div>
      </StickyContainer>
    );
  }
}