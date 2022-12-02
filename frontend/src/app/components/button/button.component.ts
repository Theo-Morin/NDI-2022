import { Component, Input, OnInit } from '@angular/core';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
};

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  SuperLarge = 'super-large',
  Full = 'full',
  Long = 'long'
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
  @Input() fontWeight: string = '500';
  @Input() align: 'center' | 'left' | 'right' = 'center';

  constructor() { }

  ngOnInit(): void {
  }

}
