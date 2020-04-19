import { Component, AfterViewInit, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { IsDesktopService } from './_services/is-desktop.service';
declare let Swiper: any;
declare let WOW: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //to access swiper bullet class
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'theotherspace';
  isDesktop: boolean;

  constructor(
    public isDesktopService: IsDesktopService
  ) {
    new WOW().init();
  }

  swiperInitialise() {
    new Swiper('.main-swiper-container', {
      loop: false,
      direction: 'vertical',
      pagination: '.main-swiper-pagination',
      paginationClickable: true,
      speed: 800,
      slidesPerView: 1,
      mousewheelControl: true,
      keyboardControl: true
    });
  }

  ngOnInit() {
    this.isDesktop = this.isDesktopService.checkIfDesktop();
  }

  ngAfterViewInit() {
    this.swiperInitialise();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.swiperInitialise();
    this.isDesktop = this.isDesktopService.checkIfDesktop();
  }
}
