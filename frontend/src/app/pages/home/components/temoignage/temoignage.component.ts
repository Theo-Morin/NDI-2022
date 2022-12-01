import { Component, OnInit } from '@angular/core';
import { ButtonSize } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss']
})
export class TemoignageComponent implements OnInit {
  formActive: boolean = false;
  buttonSize = ButtonSize;
  constructor() { }

  ngOnInit(): void {
  }

}
