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

  constructor(
    public menu: MenuService,
    private contentfulService: ContentfulService
  ) {
    new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true
    });
  }

  ngOnInit() {
    this.contentfulService.getExhibits()
      .then(exhibits => this.exhibits = exhibits)
      .then(exhibits => console.log('Array of Exhibits:', this.exhibits));
  }

  ngAfterViewInit() {
    setTimeout(function() {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        nextButton: '.swiper-button-next',
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationType: 'fraction',
        preloadImages: false,
        lazy: true
      });
    }, 3000);
  }
}
