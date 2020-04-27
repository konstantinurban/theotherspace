import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from '../_services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isPlaying: boolean = false;
  buttonShown : boolean = false;
  @ViewChild("introVideo", { static: false }) introVideo: ElementRef;

  constructor(
    public menu: MenuService
  ) {
  }

  ngOnInit() {
  }

  playVideo() {
    this.buttonShown = false;
    const video: HTMLVideoElement = this.introVideo.nativeElement;
    video.play();
    this.isPlaying = true;
  }

  videoEnded() {
    this.isPlaying = false;
  }

  showPlay() {
    this.buttonShown = true;
  }
}
