import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideService {

  constructor() { }
  public sidebarVisible: boolean = true;

   

  toggle() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  getStatus() {
    return this.sidebarVisible;
  }
}
