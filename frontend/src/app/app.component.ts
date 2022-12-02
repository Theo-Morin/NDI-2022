import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      let audio = new Audio();
      audio.src = "../../../assets/audio/sound.mp3";
      audio.load();
      audio.play();
      window.alert("")
    }, 1800000);
  }
}
