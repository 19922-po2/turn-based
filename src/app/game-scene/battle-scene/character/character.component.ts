import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HpBarComponent } from './hp-bar/hp-bar.component';
import { BuffDebuffComponent } from './buff-debuff/buff-debuff.component';

@Component({
  selector: 'app-character',
  imports: [HpBarComponent, BuffDebuffComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css',
})
export class CharacterComponent implements AfterViewInit {
  spriteSheetSrc = 'assets/sprites/dragon_down_idle.png';
  @ViewChild('spriteCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D;
  sprite = new Image();
  frameWidth = 60; // width of one frame
  frameHeight = 83; // height of one frame
  framesPerRow = 5; // how many frames in each row
  totalFrames = 8; // total number of frames
  currentFrame = 0;
  fps = 17;
  lastFrameTime = 0;

  buffAndDebuff = [];

  ngAfterViewInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.sprite.src = this.spriteSheetSrc;
    this.sprite.onload = () => requestAnimationFrame((t) => this.animate(t));
  }

  animate(timestamp: number) {
    if (!this.lastFrameTime) this.lastFrameTime = timestamp;
    const delta = timestamp - this.lastFrameTime;

    if (delta > 1000 / this.fps) {
      const col = this.currentFrame % this.framesPerRow;
      const row = Math.floor(this.currentFrame / this.framesPerRow);

      this.ctx.clearRect(0, 0, this.frameWidth, this.frameHeight);
      this.ctx.drawImage(
        this.sprite,
        col * this.frameWidth, // source X
        row * this.frameHeight, // source Y
        this.frameWidth,
        this.frameHeight,
        0,
        0, // dest X,Y
        this.frameWidth,
        this.frameHeight
      );

      this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
      this.lastFrameTime = timestamp;
    }

    requestAnimationFrame((t) => this.animate(t));
  }
}
