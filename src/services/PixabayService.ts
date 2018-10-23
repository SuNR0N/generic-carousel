import { Configuration } from '../config/config';
import { IImage } from '../interfaces/Image';
import { IPixabayResultsDTO } from '../interfaces/PixabayResultsDTO';
import { CarouselService } from './CarouselService';

export class PixabayService extends CarouselService {
  public static instance: PixabayService;

  public static getInstance(): PixabayService {
    if (PixabayService.instance === undefined) {
      PixabayService.instance = new PixabayService();
    }

    return this.instance;
  }

  private serviceUri = 'https://pixabay.com/api/';

  public async loadImages(): Promise<IImage[]> {
    const response = await fetch(
      `${this.serviceUri}?key=${Configuration.API_KEY}`,
      { mode: 'cors' }
    );
    const result: IPixabayResultsDTO = await response.json();
    return result.hits.map((hit) => {
      const image: IImage = {
        src: hit.webformatURL,
        title: hit.tags,
      };
      return image;
    });
  }
}