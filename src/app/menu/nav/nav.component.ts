import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../_services/menu.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private menu: MenuService
  ) { }

  ngOnInit() {
  }

  scrollToSection(event) {
    var id = event.target.id;
    $('html, body').animate({
      scrollTop: $('.' + id + '__section').offset().top
    }, 500);
    setTimeout(() => {
      this.menu.isMenuClosed = !this.menu.isMenuClosed;
      this.menu.isBurgerClosed = !this.menu.isBurgerClosed;
    }, 500);
  }
}
