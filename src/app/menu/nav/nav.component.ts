import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../_services/menu.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private menu : MenuService
  ) { }

  ngOnInit() {
  }

}
