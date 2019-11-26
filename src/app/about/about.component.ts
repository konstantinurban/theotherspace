import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public menu : MenuService
  ) { }

  ngOnInit() {
  }

}
