import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
declare let Swiper: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //to access swiper bullet class
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'theotherspace';

  ngOnInit() { }

  ngAfterViewInit() {
    new Swiper('.main-swiper-container', {
      loop: true,
      direction: 'vertical',
      pagination: '.main-swiper-pagination',
      paginationClickable: true,
      speed: 1000,
      slidesPerView: 1,
      mousewheel: true
    });
  }
}
