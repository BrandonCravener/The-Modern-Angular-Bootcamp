import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-photo-grabber',
  templateUrl: './photo-grabber.component.html',
  styleUrls: ['./photo-grabber.component.css'],
})
export class PhotoGrabberComponent implements OnInit {
  constructor(private imageService: ImageService) {}

  imageURL = '';
  generateDisabled = false;

  ngOnInit(): void {
    this.newImageClick();
  }

  newImageClick() {
    this.imageService.getRandomImage('small').subscribe({
      next: (url) => {
        this.imageURL = url;
      },
      error: (e: HttpErrorResponse) => {
        this.generateDisabled = true;
      },
    });
  }
}
