import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(
    private menu : MenuService
  ) { }

  ngOnInit() {
  }

}
