import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsDesktopService {

  constructor() { }

  checkIfDesktop() {
    if ((window.innerWidth) > 800) {
      return true;
    } else {
      return false;
    }
  }
}
