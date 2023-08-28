import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos-service/photos.service';
import { HttpEventType, HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  totalBytes: number = 0;
  constructor(private photosService: PhotosService) {
    this.photosService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('request has been made');

          break;

        case HttpEventType.ResponseHeader:
          console.log('received response header');
          break;

        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
      }
    });
  }

  ngOnInit(): void {}
}
