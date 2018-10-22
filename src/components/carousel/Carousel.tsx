import React, { Component } from 'react';

import { IImage } from '../../interfaces/Image';
import { CarouselItem } from '../carousel-item/CarouselItem';
import { IHaveCarouselService } from './index';

// tslint:disable:no-empty-interface
export interface IProps extends IHaveCarouselService { }

export interface IState {
  items: IImage[];
  activeIndex: number;
}

export class Carousel extends Component<IProps, IState> {
  public state: IState = {
    activeIndex: -1,
    items: [1 as any],
  };

  public async componentDidMount() {
    const images = await this.props.carouselService.loadImages();
    this.setState({ items: images });
  }

  public render() {
    const {
      renderItem,
      state: {
        items,
      },
    } = this;

    return (
      <div className="carousel">
        <div className="carousel__inner">
          {items.map(renderItem)}
        </div>
      </div>
    );
  }

  public renderItem(image: IImage, index: number) {
    return (<CarouselItem image={image} key={index} />);
  }
}