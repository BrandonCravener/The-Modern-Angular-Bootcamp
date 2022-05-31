import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageSizes, UnsplashRandomRoot } from './types';
import { pluck } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getRandomImage(size: ImageSizes) {
    return this.http
      .get<UnsplashRandomRoot>(
        `https://api.unsplash.com/photos/random?client_id=v85sD5yqDIkOzxR3BRsDMv1P9bh-LJVlMQoL5_4yOwU`
      )
      .pipe(pluck('urls', size));
  }
}
