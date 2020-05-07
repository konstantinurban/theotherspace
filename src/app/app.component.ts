import { Component, AfterViewInit, OnInit, ViewEncapsulation, HostListener, ViewChildren, QueryList } from '@angular/core';
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
  arrowsDisplayed: boolean = true;

  constructor(
    public isDesktopService: IsDesktopService
  ) {
    new WOW().init();
  }

  swiperInitialise() {
    new Swiper('.main-swiper-container', {
      loop: false,
      direction: 'vertical',
      pagination: {
        el: '.main-swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      mousewheel: {
        invert: false,
      },
      speed: 800,
      slidesPerView: 1,
      navigation: {
        nextEl: '.next-section',
      },
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.arrowsDisplayed = false;
    }, 2700);
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
