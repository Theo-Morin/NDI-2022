import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-glossary',
  templateUrl: './letter-glossary.component.html',
  styleUrls: ['./letter-glossary.component.scss']
})
export class LetterGlossaryComponent implements OnInit {
  @Input() letter: string;
  @Input() content: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
