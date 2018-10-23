import {
  shallow,
  ShallowWrapper,
} from 'enzyme';
import React from 'react';

import { ArrowIcon } from './ArrowIcon';

describe('ArrowIcon', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ArrowIcon />);
  });

  it('should apply the "icon" class name', () => {
    expect(wrapper.hasClass('icon')).toBeTruthy();
  });

  it('should set the xlinkHref properly', () => {
    const use = wrapper.find('use');

    expect(use.prop('xlinkHref')).toBe('arrow.svg#Layer_1');
  });
});