import React, { Component } from 'react';
import { render } from 'react-dom';
import { StickyContainer } from 'react-sticky';
import _ from 'underscore';

import processData from '_comms';

import CaptionTitle from '_components/CaptionTitle';
import SectionHeader from '_components/SectionHeader';

import ProtocolRow from './rows/ProtocolRow';

export default class Protocols extends Component {
  componentWillMount() {
    const { protocols, onFail, onPass } = this.props;
    _.each(protocols, data => processData(data).then(onPass).catch(onFail))
  }

  render() {
    const { protocols } = this.props;
    return (
      <StickyContainer className={'protocols-list'}>
        <CaptionTitle caption={'Protocols'} />
        <div id={'table'}>
          <SectionHeader type={'Protocol'} />
          {
            _.chain(protocols)
            .sortBy('protocol')
            .map((data, index) => <ProtocolRow key={`protocol_${index}`} { ...data } />)
            .value()
          }
        </div>
      </StickyContainer>
    );
  }
}