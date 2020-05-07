import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ContentfulService } from '../../_services/contentful.service';
import { Entry } from 'contentful';
declare let Swiper: any;

@Component({
  selector: 'app-exhibit-images',
  templateUrl: './exhibit-images.component.html',
  styleUrls: ['./exhibit-images.component.scss']
})
export class ExhibitImagesComponent implements OnInit {
  exhibitImages = [];
  @Input() eventPicturesStart: boolean;
  @Input() exhibitImagesId: string;
  @Output() sendEndEventPictures = new EventEmitter<boolean>();

  constructor(
    private contentfulService: ContentfulService
  ) { }

  ngOnInit() {
    this.contentfulService.getExhibitImages(this.exhibitImagesId)
      .then(images => this.exhibitImages = images['fields']['exhibitPhotos']);
  }

  ngAfterViewInit() {
    setTimeout(function() {
      new Swiper('.exhibit-swiper-container', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-inner-next',
          prevEl: '.swiper-inner-prev',
        },
        direction: 'horizontal',
        loop: false,
        speed: 700
      });
    }, 3000);
  }

  backToGallery() {
    this.sendEndEventPictures.emit(false);
  }
}
