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
  isGalleryExpanded: boolean = false;

  constructor(
    public menu: MenuService,
    private contentfulService: ContentfulService
  ) {
  }

  ngOnInit() {
    console.log("Load Gallery Component");
    this.contentfulService.getExhibits()
      .then(exhibits => this.exhibits = exhibits)
      .then(exhibits => console.log(exhibits));
  }

  ngAfterViewInit() {
    setTimeout(function() {
      this.gallerySwiper = new Swiper('.gallery-swiper-container', {
        slidesPerView: 1,
        direction: 'horizontal',
        allowTouchMove: false,
        lazy: {
          loadPrevNext: true,
        },
        loop: false,
        speed: 700,
        navigation: {
          nextEl: '.swiper-outer-next',
          prevEl: '.swiper-outer-prev'
        },
        pagination: {
          el: '.gallery-swiper-pagination',
          type: 'fraction',
        },
      });
    }, 3000);
  }

  showEventPictures(e) {
    this.eventPicturesStart = true;
  }

  hideEventPictures() {
    this.eventPicturesStart = false;
  }

  getEndEventImages($event) {
    this.eventPicturesStart = $event;
  }

  expandGallery() {
    if(!this.isGalleryExpanded) {
      this.isGalleryExpanded = true;
    } else if (this.isGalleryExpanded) {
      this.isGalleryExpanded = false;
    }
  }
}
