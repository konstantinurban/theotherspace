import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { StoryblokService } from '../_services/storyblok.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  story = {content: '', name: ''};
  @Input() title: string;
  @Input() _editable: any;

  constructor(
    public menu: MenuService,
    private storyblokService: StoryblokService
  ) { }

  ngOnInit() {
    /* Get Single Story */
    this.storyblokService.getStory('exhibits/first-exhibit', { version: 'draft' })
      .then(data => this.story = data.story)
      .then((response) => { console.log(response); }); // log the story

    /* Get all Stories */
    // this.storyblokService.getStories({ version: 'draft' })
    //   .then(data => this.story = data.story);

    }
}
