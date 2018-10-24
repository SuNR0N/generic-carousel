import {
  shallow,
  ShallowWrapper,
} from 'enzyme';
import React from 'react';

import { IImage } from '../../interfaces/Image';
import { CarouselItem } from '../carousel-item/CarouselItem';
import {
  Carousel,
  IProps,
  IState,
} from './Carousel';

describe('Carousel', () => {
  const items: IImage[] = [
    { src: 'a', title: '1' },
    { src: 'b', title: '2' },
    { src: 'c', title: '3' },
    { src: 'd', title: '4' },
    { src: 'e', title: '5' },
    { src: 'f', title: '6' },
  ];

  it('it should initialise the activeIndex as 0', () => {
    const wrapper = shallow<{}, IState>(<Carousel />);

    expect(wrapper.state().activeIndex).toBe(0);
  });

  it('should display the provided title in the header', () => {
    const wrapper = shallow(<Carousel title="Foo" />);

    const title = wrapper.find('.carousel__header span');

    expect(title.text()).toEqual('Foo');
  });

  it('should display 5 subsequent images within the carousel', () => {
    const wrapper = shallow<IProps>(<Carousel items={items} />);

    const titles = wrapper.find('.carousel__inner')
      .find(CarouselItem)
      .map((ci) => ci.prop('image').title);

    expect(titles).toEqual(['5', '6', '1', '2', '3']);
  })

  describe('when clicking the next button', () => {
    let wrapper: ShallowWrapper<{}, IState>

    beforeEach(() => {
      wrapper = shallow<{}, IState>(<Carousel items={items} />);
    });

    it('should set the activeIndex properly if it is less than the number of items', () => {
      wrapper.setState({ activeIndex: 3 });

      const nextButton = wrapper.find('.carousel__control-next');
      nextButton.simulate('click');

      expect(wrapper.state().activeIndex).toBe(4);
    });

    it('should set the activeIndex properly if it is about to overflow', () => {
      wrapper.setState({ activeIndex: 5 });

      const nextButton = wrapper.find('.carousel__control-next');
      nextButton.simulate('click');

      expect(wrapper.state().activeIndex).toBe(0);
    });

    it('should update the visible items accordingly', () => {
      wrapper.setState({ activeIndex: 0 });

      const nextButton = wrapper.find('.carousel__control-next');
      nextButton.simulate('click');

      const titles = wrapper.find('.carousel__inner')
        .find(CarouselItem)
        .map((ci) => ci.prop('image').title);

      expect(titles).toEqual(['6', '1', '2', '3', '4']);
    });
  });

  describe('when clicking the previous button', () => {
    let wrapper: ShallowWrapper<{}, IState>

    beforeEach(() => {
      wrapper = shallow<{}, IState>(<Carousel items={items} />);
    });

    it('should set the activeIndex properly if it is greater than 0', () => {
      wrapper.setState({ activeIndex: 1 });

      const nextButton = wrapper.find('.carousel__control-prev');
      nextButton.simulate('click');

      expect(wrapper.state().activeIndex).toBe(0);
    });

    it('should set the activeIndex properly if it was 0', () => {
      wrapper.setState({ activeIndex: 0 });

      const nextButton = wrapper.find('.carousel__control-prev');
      nextButton.simulate('click');

      expect(wrapper.state().activeIndex).toBe(5);
    });

    it('should update the visible items accordingly', () => {
      wrapper.setState({ activeIndex: 0 });

      const nextButton = wrapper.find('.carousel__control-prev');
      nextButton.simulate('click');

      const titles = wrapper.find('.carousel__inner')
        .find(CarouselItem)
        .map((ci) => ci.prop('image').title);

      expect(titles).toEqual(['4', '5', '6', '1', '2']);
    });
  });
});