import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {
  constructor(private router: Router) {}

  startGame() {
    this.router.navigateByUrl('/game');
  }

  openOptions() {
    this.router.navigateByUrl('/options');
  }
}
