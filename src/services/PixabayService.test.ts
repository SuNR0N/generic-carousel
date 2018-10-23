import {
  mock,
  mockResponseOnce,
  resetMocks,
} from 'jest-fetch-mock';

import { PixabayService } from './PixabayService';

describe('PixabayService', () => {
  const responseMock = {
    hits: [
      {
        tags: 'foo bar',
        webformatURL: 'http://www.example.com',
      },
    ],
  };
  let service: PixabayService;

  beforeAll(() => {
    service = PixabayService.getInstance();
  });

  beforeEach(() => {
    jest.resetModules();
    resetMocks();
    mockResponseOnce(JSON.stringify(responseMock));
  });

  describe('loadImages', () => {
    it('should call the fetch with the URL of Pixabay', async () => {
      await service.loadImages();

      expect(mock.calls[0][0]).toMatch(/^https:\/\/pixabay\.com\/api\//);
    });

    it('should call the fetch with the provided API Key', async () => {
      jest.doMock('../config/config', () => ({
        Configuration: {
          API_KEY: 'foo'
        },
      }))
      const { PixabayService: PixabayServiceDynamic } = require('./PixabayService');

      await PixabayServiceDynamic.getInstance().loadImages();

      expect(mock.calls[0][0]).toMatch(/\?key=foo/);
    });

    it('should set the "cors" mode for fetch', async () => {
      await service.loadImages();

      expect(mock.calls[0][1]).toEqual({ mode: 'cors' });
    });

    it('should return the mapped results if it succeeds', async () => {
      const results = await service.loadImages();

      expect(results).toEqual([
        {
          src: 'http://www.example.com',
          title: 'foo bar',
        },
      ])
    });
  });
});