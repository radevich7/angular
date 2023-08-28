import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../../../app_config/app_config.interface';
import { APP_SERVICE_CONFIG } from 'src/app_config/app_config.service';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(
    private http: HttpClient,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {}

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `${this.config.apiEndpoint}/photos`,
      {
        reportProgress: true,
      }
    );

    return this.http.request(request);
  }
}
