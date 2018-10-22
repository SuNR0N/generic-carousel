import React, { SFC } from 'react';

import { IImage } from '../../interfaces/Image';

export interface IProps {
  image: IImage;
}

export const CarouselItem: SFC<IProps> = (props) => {
  const { image } = props;
  let className = 'carousel-item';
  if (image.active) {
    className = `${className} active`;
  }

  return (
    <div className={className}>
      <img src={image.src} alt={image.title} />
    </div>
  );
}