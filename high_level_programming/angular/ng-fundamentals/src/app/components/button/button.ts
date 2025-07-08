import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() value = 'Share data b/w components';
  @Output() myCustomEvent = new EventEmitter();

  log() {
    this.myCustomEvent.emit();
  }
}
