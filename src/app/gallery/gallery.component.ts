import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { ContentfulService } from '../_services/contentful.service';
import { Entry } from 'contentful';
declare let Swiper: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  exhibits: Entry<any>[] = [];
  eventPicturesStart: boolean = false;

  constructor(
    public menu: MenuService,
    private contentfulService: ContentfulService
  ) {
  }

  ngOnInit() {
    this.contentfulService.getExhibits()
      .then(exhibits => this.exhibits = exhibits);
  }

  ngAfterViewInit() {
    setTimeout(function() {
      new Swiper('.gallery-swiper-container', {
        slidesPerView: 1,
        nextButton: '.swiper-outer-next',
        prevButton: '.swiper-button-prev',
        direction: 'horizontal',
        loop: false,
        speed: 700,
        pagination: '.gallery-swiper-pagination',
        paginationClickable: true,
        paginationType: 'fraction',
        preloadImages: false,
        lazy: true,
        keyboardControl: true
      });
    }, 3000);
  }

  showEventPictures() {
    this.eventPicturesStart = true;
    console.log("eventPicturesStart", this.eventPicturesStart);
  }

  hideEventPictures() {
    this.eventPicturesStart = false;
    console.log("hideEventPictures", this.eventPicturesStart);
  }
}
