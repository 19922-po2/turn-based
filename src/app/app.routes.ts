import { Routes } from '@angular/router';
import { GameSceneComponent } from './game-scene/game-scene.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { BattleSceneComponent } from './game-scene/battle-scene/battle-scene.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'game/battle', component: BattleSceneComponent },
  { path: 'game', component: GameSceneComponent },
  { path: 'options', component: OptionsMenuComponent },
];
