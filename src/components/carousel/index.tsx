import React, { Component, ComponentType } from 'react';

import { ICarouselService } from '../../services/CarouselService';
import { PixabayService } from '../../services/PixabayService';
import { Carousel } from './Carousel';

export interface IHaveCarouselService {
  carouselService: ICarouselService;
}

const withPixabayService = <P extends object>(WrappedComponent: ComponentType<P & IHaveCarouselService>) => {
  class WithPixabayService extends Component<P & IHaveCarouselService> {
    public render() {
      const pixabayService = new PixabayService();

      return (
        <WrappedComponent
          carouselService={pixabayService}
          {...this.props}
        />
      );
    }
  }
  return WithPixabayService;
}

export const PixabayCarousel: any = withPixabayService(Carousel);