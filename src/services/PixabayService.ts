import { Configuration } from '../config/config';
import { IImage } from '../interfaces/Image';
import { IPixabayResultsDTO } from '../interfaces/PixabayResultsDTO';
import { CarouselService } from './CarouselService';

export class PixabayService extends CarouselService {
  private serviceUri = 'http://pixabay.com/api/';

  public async loadImages(): Promise<IImage[]> {
    const response = await fetch(`${this.serviceUri}?key=${Configuration.API_KEY}`);
    const result: IPixabayResultsDTO = await response.json();
    return result.hits.map((hit, index) => {
      const image: IImage = {
        active: index === 0,
        src: hit.previewURL,
        title: hit.tags,
      };
      return image;
    });
  }
}