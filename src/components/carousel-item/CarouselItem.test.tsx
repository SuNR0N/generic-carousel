import {
  shallow,
  ShallowWrapper,
} from 'enzyme';
import React from 'react';

import {
  CarouselItem,
  IProps,
} from './CarouselItem';

describe('CarouselItem', () => {
  const minProps: IProps = {
    image: {
      src: 'http://example.com',
      title: 'FooBar',
    },
  };
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<CarouselItem {...minProps} />);
  });

  it('should apply the "carousel-item" class', () => {
    expect(wrapper.hasClass('carousel-item')).toBeTruthy();
  });

  describe('img', () => {
    let img: ShallowWrapper;

    beforeAll(() => {
      img = wrapper.find('img');
    });

    it('should set the source of the image', () => {
      expect(img.prop('src')).toEqual('http://example.com');
    });

    it('should set the alt of the image', () => {
      expect(img.prop('alt')).toEqual('FooBar');
    });
  });

  it('should set the caption', () => {
    const caption = wrapper.find('figcaption');

    expect(caption.text()).toEqual('FooBar');
  });
});