import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { IsDesktopService } from '../_services/is-desktop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isPlaying: boolean = false;
  buttonShown: boolean = false;
  isDesktop: boolean;
  isMuted: boolean = true;
  @ViewChild("introVideo", { static: false }) introVideo: ElementRef;

  constructor(
    public menu: MenuService,
    public isDesktopService: IsDesktopService
  ) {
  }

  ngOnInit() {
    this.isDesktop = this.isDesktopService.checkIfDesktop();
    console.log("init", this.isMuted);
  }

  playVideo() {
    this.buttonShown = false;
    const video: HTMLVideoElement = this.introVideo.nativeElement;
    video.muted = true;
    video.play();
    this.isPlaying = true;
  }

  videoEnded() {
    this.isPlaying = false;
  }

  showPlay() {
    this.buttonShown = true;
  }

  endVideo() {
    const video: HTMLVideoElement = this.introVideo.nativeElement;
    video.pause();
    this.isPlaying = false;
  }

  unmuteVideo() {
    const video: HTMLVideoElement = this.introVideo.nativeElement;
    if (this.isMuted) {
      video.muted = false;
      this.isMuted = false;
    } else if (!this.isMuted) {
      video.muted = true;
      this.isMuted = true;
    }
  }
}
