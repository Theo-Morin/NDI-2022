import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  keys: string = ""
  keyBinding: string = "vih"


  constructor(private router: Router) {}

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keys += event.key;
    if (this.keys.length === this.keyBinding.length) {
      if (this.keys === this.keyBinding) {
        this.router.navigate(['/game']);
      }
      this.keys = this.keys.substr(1)
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      let audio = new Audio();
      audio.src = "../../../assets/audio/sound.mp3";
      audio.load();
      audio.play();
      window.alert("WaW ! ça fait 30 minutes que tu es sur le site ! Tu dois bien l'aimer !");
    }, 1800000);
  }
}
