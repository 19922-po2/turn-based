import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-scene',
  imports: [],
  templateUrl: './game-scene.component.html',
  styleUrl: './game-scene.component.css',
})
export class GameSceneComponent {
  constructor(private router: Router) {}

  startBattle() {
    console.log('/game/battle');
    this.router.navigateByUrl('/game/battle');
  }
}
