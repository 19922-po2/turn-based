import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hp-bar',
  imports: [NgIf],
  templateUrl: './hp-bar.component.html',
  styleUrl: './hp-bar.component.css',
})
export class HpBarComponent {
  hp = 80;
  maxHp = 100;
  level = 60;
  showDamage = false;

  takeDamage(amount: number) {
    this.hp = Math.max(0, this.hp - amount);
    this.showDamage = true;
    setTimeout(() => (this.showDamage = false), 500);
  }
}
