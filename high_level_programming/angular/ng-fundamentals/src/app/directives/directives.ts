import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.scss'
})
export class Directives {
  title = 'structural directives'
  sectionTitle = '*ngIf vs @if block'
  sectionTitle2 = '*ngFor vs @for block'
  isBtnToggle = false;
  showElement = false;

  input1 = '';
  input2 = ''

  courses = ['Angular', 'Nest Js', 'Django', 'Laravel']
  courses2 = []

toggleBtn (): void {
    this.isBtnToggle = !this.isBtnToggle
    console.log(this.isBtnToggle)
}

show() {
  this.showElement = true;
}

hide() {
  this.showElement = false;
}



}
