import { Component, OnInit, HostListener } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { IsDesktopService } from '../_services/is-desktop.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOpen: boolean;
  isDesktop: boolean;

  constructor(
    public menu : MenuService,
    public isDesktopService : IsDesktopService
  ) {}

  ngOnInit() {
    this.isDesktop = this.isDesktopService.checkIfDesktop();
  }

  onBurgerClicked() {
    this.menu.isBurgerClosed = !this.menu.isBurgerClosed;
    this.menu.isMenuClosed = !this.menu.isMenuClosed;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isDesktop = this.isDesktopService.checkIfDesktop();
  }
}
