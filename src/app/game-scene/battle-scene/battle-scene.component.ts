import { Component } from '@angular/core';
import { CharacterComponent } from './character/character.component';

@Component({
  selector: 'app-battle-scene',
  imports: [CharacterComponent],
  templateUrl: './battle-scene.component.html',
  styleUrl: './battle-scene.component.css',
})
export class BattleSceneComponent {
  constructor() {
    console.log('BattleSceneComponent');
  }
}
