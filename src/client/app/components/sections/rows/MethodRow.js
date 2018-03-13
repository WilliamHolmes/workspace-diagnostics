import React from 'react';

const MethodRow = ({ method, state, details, time }) => (
  <div className={'row'}>
    <input type={'radio'} name={'expand'}/>
    <span className={'cell primary'} data-label={'Status'}>
      <span className={`service service-${state}`}></span>
      <span className={'small-detail'}>{method}</span>
    </span>
    <span className={'cell'} data-label={'Method'}>{method}</span>
    <span className={'cell'} data-label={'Details'}>{details}</span>
    <span className={'cell'} data-label={'Time'}>{time}</span>
  </div>
)

export default MethodRow
