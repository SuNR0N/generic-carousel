import React, { SFC } from 'react';

// tslint:disable-next-line:no-var-requires
const ArrowPath = require('../../assets/icons/arrow.svg');

export const ArrowIcon: SFC = () => (
  <svg className="icon">
    <use xlinkHref={`${ArrowPath}#Layer_1`} />
  </svg>
)