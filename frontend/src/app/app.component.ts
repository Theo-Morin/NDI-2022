import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sex';

  ngOnInit(): void {
    setInterval(() => {
      let audio = new Audio();
      audio.src = "../../../assets/audio/alarm.wav";
      audio.load();
      audio.play();
    }, 1800000);
  }
}
