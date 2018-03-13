import React from 'react';

const ProtocolRow = ({ protocol, state, details, time }) => (
  <div className={'row'}>
    <input type={'radio'} name={'expand'}/>
    <span className={'cell primary'} data-label={'Status'}>
      <span className={`service service-${state}`}></span>
      <span className={'small-detail'}>{protocol}</span>
    </span>
    <span className={'cell'} data-label={'Protocol'}>{protocol}</span>
    <span className={'cell'} data-label={'Details'}>{details}</span>
    <span className={'cell'} data-label={'Time'}>{time}</span>
  </div>
)

export default ProtocolRow
