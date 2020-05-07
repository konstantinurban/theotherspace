import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ContentfulService } from '../_services/contentful.service';
import { Entry } from 'contentful';
declare let Swiper: any;

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {
  specialItems: Entry<any>[] = [];

  constructor(
    private contentfulService: ContentfulService
  ) {
  }

  ngOnInit() {
    this.contentfulService.getSpecialItems()
      .then(items => this.specialItems = items)
      .then(items => console.log(items));
  }

  ngAfterViewInit() {
    setTimeout(function() {
      new Swiper('.cafe-swiper-container', {
        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        effect: 'fade',
        autoPlay: true,
        autoplay: {
          delay: 2000,
        },
        fadeEffect: {
          crossFade: true
        }
      });
    }, 3000);
  }
}
