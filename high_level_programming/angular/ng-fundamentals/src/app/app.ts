import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { Courses } from './services/courses';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBinding, Directives],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Ng Fundamentals';

  courses;

  constructor(private course: Courses) {
    this.courses = course.getCourses();
  }
}
