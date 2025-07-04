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
  title = 'structural directives and new built-in control flow statments'
  sectionTitle = '*ngIf vs @if block'
  sectionTitle2 = '*ngFor vs @for block'
  sectionTitle3 = 'ngSwitch vs @switch block'
  sectionTitle4  = 'attribute directives'
  isBtnToggle = false;
  showElement = false;

  textColor = 'text-secondary';
  isAwesome = false;
  userClass = ''
  ngStyle = 'lightsalmon'
  conditionStyle = false

  input1 = '';
  input2 = ''

  customClass = {
    'color': 'pink',
    'height': '150px',
    'width': '400px',
    'padding': '.5rem',
    'border': '1px solid blue'
  }

  courses = ['Angular', 'Nest Js', 'Django', 'Laravel', 'Flask']
  courses2 = []
  classLevel = 0;
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

set(number: number) {
    this.classLevel = number;
}

changeTextColor(color: string) {
  this.textColor = color;
}


updateColor(ngStyleColor: string) {
  this.ngStyle = ngStyleColor
}

}
