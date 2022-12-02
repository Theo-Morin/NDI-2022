import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temoignage-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss']
})
export class TemoignageTemoignageComponent implements OnInit {
  @Input() testimony: any;

  constructor() { }

  ngOnInit(): void {
  }

}
