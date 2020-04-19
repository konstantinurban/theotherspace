import { Component, OnInit } from '@angular/core';
declare let WOW: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {
    new WOW().init();
  }

  ngOnInit() {
  }

}
