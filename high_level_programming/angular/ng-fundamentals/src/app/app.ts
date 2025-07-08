import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { Courses } from './services/courses';
import { CurrencyPipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleCasePipePipe } from './pipes/title-case-pipe-pipe';
import { Button } from './components/button/button';
import { BoostrapPanel } from './components/boostrap-panel/boostrap-panel';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DataBinding,
    Directives,
    CurrencyPipe,
    UpperCasePipe,
    DecimalPipe,
    FormsModule,
    TitleCasePipePipe,
    Button,
    BoostrapPanel,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Ng Fundamentals';

  courses;
  price = 308539;
  numOfStudents = 5024;
  rating = 4.821;
  pipeTitle = 'testing pipe';

  text = '';

  dataValue = 'Parent to child value';

  constructor(private course: Courses) {
    this.courses = course.getCourses();
  }

  changeBg() {
    console.log('Output decorator works');
  }
}
