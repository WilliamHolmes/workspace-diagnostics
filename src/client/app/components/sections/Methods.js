import React, { Component } from 'react';
import { render } from 'react-dom';
import { StickyContainer } from 'react-sticky';
import _ from 'underscore';

import processData from '_comms';

import CaptionTitle from '_components/CaptionTitle';
import SectionHeader from '_components/SectionHeader';

import MethodRow from './rows/MethodRow';

export default class Methods extends Component {
  componentWillMount() {
    const { methods, onFail, onPass } = this.props;
    _.each(methods, data => processData(data).then(onPass).catch(onFail))
  }

  render() {
    const { methods } = this.props;
    return (
      <StickyContainer className={'methods-list'}>
        <CaptionTitle caption={'REST Methods'} />
        <div id={'table'}>
          <SectionHeader type={'Method'} />
          {
            _.chain(methods)
            .sortBy('method')
            .map((data, index) => <MethodRow key={`method_${index}`} { ...data } />)
            .value()
          }
        </div>
      </StickyContainer>
    );
  }
}