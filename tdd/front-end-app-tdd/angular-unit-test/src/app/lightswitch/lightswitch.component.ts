import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lightswitch-comp',
  template: ` <button type="button" (click)="clicked()">Click me!</button>
    <span>{{ message }}</span>`,
})
export class LightswitchComponent {
  isOn = false;
  clicked() {
    this.isOn = !this.isOn;
  }
  get message() {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }
}