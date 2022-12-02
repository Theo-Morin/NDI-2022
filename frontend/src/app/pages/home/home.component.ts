import { Component, OnInit } from '@angular/core';
import { ButtonSize } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  buttonSize = ButtonSize;
  constructor() { }

  ngOnInit(): void {
  }

}
