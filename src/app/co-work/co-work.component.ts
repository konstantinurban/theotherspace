import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';


@Component({
  selector: 'app-co-work',
  templateUrl: './co-work.component.html',
  styleUrls: ['./co-work.component.scss']
})
export class CoWorkComponent implements OnInit {

  constructor(
    public menu : MenuService
  ) { }

  ngOnInit() {
  }

}
