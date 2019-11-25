import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';


@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {

  constructor(
    public menu : MenuService
  ) { }

  ngOnInit() {
  }

}
