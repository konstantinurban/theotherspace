import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';
declare let Swiper: any;

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {

  constructor(
    public menu: MenuService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(function() {
      new Swiper('.cafe-swiper-container', {
        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,
        speed: 600,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.swiper-item-next',
          prevEl: '.swiper-item-prev'
        },
        // pagination: {
        //   el: '.gallery-swiper-pagination',
        //   type: 'fraction',
        // },
      });
    }, 3000);
  }

}
