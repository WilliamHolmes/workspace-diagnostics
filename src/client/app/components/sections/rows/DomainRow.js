import React from 'react';
import ToolTip from 'rc-tooltip';

const DomainRow = ({ domain, state, details, time, description }) => (
  <div className={'row'}>
    <input type={'radio'} name={'expand'}/>
    <span className={'cell primary'} data-label={'Status'}>
      <span className={`service service-${state}`}></span>
      <span className={'small-detail'}>
        <ToolTip placement={'right'} trigger={['hover']} overlay={<span>{description}</span>}>{domain}</ToolTip>
      </span>
    </span>
    <span className={'cell'} data-label={'Domain'}>
      <ToolTip placement={'right'} trigger={['hover']} overlay={<span>{description}</span>}>{domain}</ToolTip>
      </span>
    <span className={'cell'} data-label={'Details'}>{details}</span>
    <span className={'cell'} data-label={'Time'}>{time}</span>
  </div>
)

export default DomainRow