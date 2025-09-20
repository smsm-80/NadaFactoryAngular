import { Component } from '@angular/core';

@Component({
  selector: 'app-nada-navbar',
  imports: [],
  templateUrl: './nada-navbar.html',
  styleUrl: './nada-navbar.css'
})
export class NadaNavbar {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
