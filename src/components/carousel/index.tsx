import React, { Component, ComponentType } from 'react';

import { IImage } from 'src/interfaces/Image';
import { PixabayService } from '../../services/PixabayService';
import {
  Carousel,
  IProps,
} from './Carousel';

export interface IWithPixabayServiceState {
  items: IImage[];
}

const withPixabayService = <P extends object>(WrappedComponent: ComponentType<P & IProps>) => {
  class WithPixabayService extends Component<P, IWithPixabayServiceState> {
    public state: IWithPixabayServiceState = {
      items: [],
    };

    private pixabayService = PixabayService.getInstance();

    public async componentDidMount() {
      const images = await this.pixabayService.loadImages();
      this.setState({ items: images });
    }

    public render() {
      const {
        state: {
          items,
        },
      } = this;

      return (
        <WrappedComponent
          {...this.props}
          items={items}
        />
      );
    }
  }
  return WithPixabayService;
}

export const PixabayCarousel = withPixabayService(Carousel);