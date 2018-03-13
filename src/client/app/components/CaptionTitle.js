import React from 'react';
import { Sticky } from 'react-sticky';

const CaptionTitle = ({ caption }) => (
  <Sticky>
    { ({ style }) => <div style={{ ...style }} className={'caption'}>{caption}</div> }
  </Sticky>
)

export default CaptionTitle