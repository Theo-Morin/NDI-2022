import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() cols = 30;
  @Input() rows = 10;
  @Input() value: string = '';
  @Input() class: string = '';
  @Output() valueChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
