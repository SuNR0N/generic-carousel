import { IPixabayResultDTO } from './PixabayResultDTO';

export interface IPixabayResultsDTO {
  totalHits: number;
  hits: IPixabayResultDTO[];
  total: number;
}