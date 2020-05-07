import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { ContentfulService } from '../_services/contentful.service';
import { ImagesLoadedDirective } from '../_directives/images-loaded.directive';
import { forkJoin, Subscription, of } from 'rxjs';
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
  subscription: Subscription;
  @ViewChildren(ImagesLoadedDirective) images: QueryList<ImagesLoadedDirective>;

  constructor(
    public menu: MenuService,
    private contentfulService: ContentfulService
  ) {
  }

  ngOnInit() {
    this.contentfulService.getExhibits()
      .then(exhibits => this.exhibits = exhibits);
    // .subscribe(exhibits => this.exhibits = exhibits);
  }

  imagesLoaded() {
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
      observer: true,
      observeParents: true,
    });
  }

  ngAfterViewInit() {
    this.subscription = this.images.changes.subscribe(res => {
      forkJoin(this.images.map(imgDir => imgDir.loaded)).subscribe(() => {
        this.imagesLoaded();
      });
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
