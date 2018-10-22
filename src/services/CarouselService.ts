import { IImage } from '../interfaces/Image';

export interface ICarouselService {
  loadImages: () => Promise<IImage[]>;
}

export abstract class CarouselService implements ICarouselService {
  public abstract async loadImages(): Promise<IImage[]>;
}