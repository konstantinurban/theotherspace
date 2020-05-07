import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { ContentfulService } from '../_services/contentful.service';
import { ImagesLoadedDirective } from '../_directives/images-loaded.directive';
import { forkJoin, Subscription } from 'rxjs';
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
  @ViewChildren(ImagesLoadedDirective) images: QueryList<ImagesLoadedDirective>;

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
    forkJoin(this.images.map(imgDir => imgDir.loaded)).subscribe(() => {
      console.log('all images have been loaded');
    });
    setTimeout(function() {
      new Swiper('.gallery-swiper-container', {
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
    if (!this.isGalleryExpanded) {
      this.isGalleryExpanded = true;
    } else if (this.isGalleryExpanded) {
      this.isGalleryExpanded = false;
    }
  }
}
