import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOpen: boolean

  constructor(
    public menu : MenuService
  ) { }

  ngOnInit() {
  }

  onBurgerClicked() {
    this.menu.isBurgerClosed = !this.menu.isBurgerClosed;
    this.menu.isMenuClosed = !this.menu.isMenuClosed;
  }
}
