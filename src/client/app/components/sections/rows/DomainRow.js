import React from 'react';

const DomainRow = ({ domain, internal, state, details, time }) => (
  <div className={'row'} data-domain-type={internal ? 'internal': 'external'}>
    <input type={'radio'} name={'expand'}/>
    <span className={'cell primary'} data-label={'Status'}>
      <span className={`service service-${state}`}></span>
      <span className={'small-detail'}>{domain}</span>
    </span>
    <span className={'cell'} data-label={'Domain'}>{domain}</span>
    <span className={'cell'} data-label={'Details'}>{details}</span>
    <span className={'cell'} data-label={'Time'}>{time}</span>
  </div>
)

export default DomainRow