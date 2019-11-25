import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public menu : MenuService
  ) { }

  ngOnInit() {
  }

}
