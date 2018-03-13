import React, { Component } from 'react';
import { render } from 'react-dom';
import { StickyContainer } from 'react-sticky';
import _ from 'underscore';

import processData from '_comms';

import CaptionTitle from '_components/CaptionTitle';
import SectionHeader from '_components/SectionHeader';

import DomainRow from './rows/DomainRow';

export default class Domains extends Component {
  componentWillMount() {
    const { domains, onFail, onPass } = this.props;
    _.each(domains, domain => processData(domain).then(onPass).catch(onFail));
  }

  render() {
    const { domains } = this.props;
    return (
      <StickyContainer className={'domains-list'}>
        <CaptionTitle caption={'Domains'} />
        <div className={'caption sub'}>{'IBM Watson Workspace'}</div>
        <div id={'table'}>
          <SectionHeader type={'Domain'} />
          {
            _.chain(domains)
            .sortBy('domain')
            .filter(obj => obj.internal)
            .map((data, index) => <DomainRow key={`domain_internal_${index}`} { ...data } />)
            .value()
          }
        </div>
        <div className={'caption sub'}>{'Others'}</div>
        <div id={'table'}>
          <SectionHeader type={'Domain'} />
          {
            _.chain(domains)
            .sortBy('domain')
            .filter(obj => obj.external)
            .map((data, index) => <DomainRow key={`domain_external_${index}`} { ...data } />)
            .value()
          }
        </div>
      </StickyContainer>
    );
  }
}