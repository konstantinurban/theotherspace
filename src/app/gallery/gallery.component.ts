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
  nextArtist: [] = [];

  constructor(
    public menu: MenuService,
    private contentfulService: ContentfulService
  ) {
  }

  ngOnInit() {
    console.log("Load Gallery Component");
    this.contentfulService.getExhibits()
      .then(exhibits => this.exhibits = exhibits)
    // .then(exhibit => {
    //   this.exhibits.forEach(artist => {
    //     this.nextArtist.push(artist.fields.artist);
    //   });
    // });
  }

  ngAfterViewInit() {
    setTimeout(function() {
      new Swiper('.gallery-swiper-container', {
        slidesPerView: 1,
        nextButton: '.swiper-outer-next',
        prevButton: '.swiper-outer-prev',
        direction: 'horizontal',
        loop: false,
        speed: 700,
        draggable: false,
        pagination: '.gallery-swiper-pagination',
        paginationClickable: true,
        paginationType: 'fraction',
        preloadImages: false,
        lazy: true,
        keyboardControl: false
      });
    }, 3000);
  }

  showEventPictures(e) {
    this.eventPicturesStart = true;
    let exhibits = document.querySelectorAll('.gallery__content');
    // setTimeout(() => {
    //   exhibits.forEach(exhibit => {
    //     if (!(exhibit.parentElement.classList.contains("swiper-slide-active"))) {
    //       exhibit.classList.remove("show-event-pictures");
    //     }
    //   });
    // }, 1000);
  }

  hideEventPictures() {
    this.eventPicturesStart = false;
    console.log("hideEventPictures", this.eventPicturesStart);
  }

  getEndEventImages($event) {
    this.eventPicturesStart = $event;
  }

}
