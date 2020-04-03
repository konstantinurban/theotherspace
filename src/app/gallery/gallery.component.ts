import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { ContentfulService } from '../_services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  exhibits : Entry<any>[] = [];

  constructor(
    public menu : MenuService,
    private contentfulService : ContentfulService
  ) { }

  ngOnInit() {
    this.contentfulService.getExhibits()
    .then(exhibits => this.exhibits = exhibits)
    .then(exhibits => console.log('Array of Exhibits:', this.exhibits));
  }

}
