import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dons',
  templateUrl: './dons.component.html',
  styleUrls: ['./dons.component.scss']
})
export class DonsComponent implements OnInit {
  donValue: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  valueChanged(event: any) {
    this.donValue = event;
    console.log(this.donValue);
  }

  send() {
    if(this.donValue == 420 || this.donValue == 4.2) {
      window.location.replace('https://ametif.com/course/le-risque-drogues/');
    }
    if(this.donValue == 5061981) {
      window.location.replace('https://fr.wikipedia.org/wiki/Ga%C3%ABtan_Dugas');
    }
    if(this.donValue == 1) {
      window.location.replace('https://www.youtube.com/watch?v=F6lVw9sNVic');
    }
  }

}
