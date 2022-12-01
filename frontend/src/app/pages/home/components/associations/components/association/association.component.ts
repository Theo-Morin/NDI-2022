import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-association-component',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {
  @Input() name: string;
  @Input() link: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
