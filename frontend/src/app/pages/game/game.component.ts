import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  score = 0;
  start = false;
  level = 5;
  top: number = 0;
  left: number = 0;
  initial_size = 100;
  width: number = 100;
  height: number = 100;
  base_timeout = 2000;
  timeout = 2000;
  interval: any;
  stop = false;
  bgImg: string = "url(../../../assets/img/jeu1.png)";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.start = true;
      this.interval = setInterval(() => {
        if(this.score < 0) {
          this.score = 98;
          this.width = 98;
          this.height = 100;
        }
        if(this.stop) {
          this.stop = false;
        }
        else {
          if(this.score > 0) {
            this.score--;
          }
        }
        this.top = this.rand();
        this.left = this.rand();
      }, this.timeout);
    }, 5000);
  }

  clickOn() {
    if(!this.stop) {
      this.score++;
      let gameDesign = Math.trunc(this.score/(this.level*2)) <= 4 && Math.trunc(this.score/(this.level)) >= 1 ? Math.trunc(this.score/(this.level)) : 1;
      this.bgImg = "url(../../../assets/img/jeu" + gameDesign + ".png)";
      console.log(this.bgImg);
      if(this.score/this.level >= 1) {

        this.timeout = this.base_timeout - (this.score/this.level)*250;
        this.width = this.initial_size - Math.trunc(this.score/this.level)*5 > 10 ? this.width - Math.trunc(this.score/this.level)*2 : 10;
        this.height = this.width;
      }
      this.stop = true;
    }
  }

  rand(): number {
    return Math.floor(Math.random() * 98)
  }

  outOfRange() {
    if(this.start && !this.stop) {
      if(this.score > 0) {
        this.score--;
      }
    }
  }

}
