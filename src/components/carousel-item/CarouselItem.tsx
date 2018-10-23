import React, { SFC } from 'react';

import { IImage } from '../../interfaces/Image';

export interface IProps {
  image: IImage;
}

export const CarouselItem: SFC<IProps> = (props) => {
  const { image } = props;

  return (
    <figure className="carousel-item">
      <img src={image.src} alt={image.title} />
      <figcaption>{image.title}</figcaption>
    </figure>
  );
}