import { Component, Input, OnInit } from '@angular/core';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success'
};

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Full = 'full'
};

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: ButtonType;
  @Input() size: ButtonSize;
  @Input() classes: string;
  @Input() fontSize: string = '14px';

  constructor() { }

  ngOnInit(): void {
  }

}
