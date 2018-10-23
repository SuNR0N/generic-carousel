import React, { Component } from 'react';

import { IImage } from '../../interfaces/Image';
import { ArrowIcon } from '../arrow-icon/ArrowIcon';
import { CarouselItem } from '../carousel-item/CarouselItem';

export interface IProps {
  items?: IImage[];
  title?: string;
}

export interface IState {
  activeIndex: number;
}

export class Carousel extends Component<IProps, IState> {
  public state: IState = {
    activeIndex: 0,
  };

  public render() {
    const {
      onNext,
      onPrev,
      renderItem,
      props: {
        title,
      },
      visibleItems,
    } = this;

    return (
      <div className="carousel">
        <header className="carousel__header">
          <span>{title}</span>
        </header>
        <div className="carousel__inner">
          {visibleItems.map(renderItem)}
          <div className="carousel__controls">
            <a
              onClick={onPrev}
              className="carousel__control-prev"
              role="button">
              <span
                className="carousel__control-prev-icon"
                aria-hidden="true">
                <ArrowIcon />
              </span>
              <span>Prev</span>
            </a>
            <a
              onClick={onNext}
              className="carousel__control-next"
              role="button">
              <span
                className="carousel__control-next-icon"
                aria-hidden="true">
                <ArrowIcon />
              </span>
              <span>Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  public get visibleItems() {
    if (this.props.items && this.props.items.length > 0) {
      const ppIndex = this.getIndex(this.state.activeIndex - 2, this.props.items);
      const pIndex = this.getIndex(this.state.activeIndex - 1, this.props.items);
      const nIndex = this.getIndex(this.state.activeIndex + 1, this.props.items);
      const nnIndex = this.getIndex(this.state.activeIndex + 2, this.props.items);
      return [ppIndex, pIndex, this.state.activeIndex, nIndex, nnIndex].map((index) => this.props.items![index]);
    } else {
      return [];
    }
  }

  public renderItem = (image: IImage, index: number) => {
    return (<CarouselItem image={image} key={index} />);
  }

  public onNext = () => {
    if (this.props.items) {
      if (this.state.activeIndex < this.props.items.length - 1) {
        this.setState({ activeIndex: this.state.activeIndex + 1 });
      } else {
        this.setState({ activeIndex: 0 });
      }
    }
  }

  public onPrev = () => {
    if (this.props.items) {
      if (this.state.activeIndex > 0) {
        this.setState({ activeIndex: this.state.activeIndex - 1 });
      } else {
        this.setState({ activeIndex: this.props.items.length - 1 });
      }
    }
  }

  private getIndex = (index: number, arr: any[]): number => {
    if (index < 0) {
      return index % arr.length === 0 ? 0 : arr.length + (index % arr.length);
    } else if (index >= arr.length) {
      return index % arr.length;
    } else {
      return index;
    }
  }
}