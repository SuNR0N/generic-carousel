import React, { Component } from 'react';

import { IImage } from '../../interfaces/Image';
import { CarouselItem } from '../carousel-item/CarouselItem';

export interface IProps {
  items?: IImage[];
}

export class Carousel extends Component<IProps> {
  public render() {
    const {
      renderItem,
      props: {
        items = [],
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