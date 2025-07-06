import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Courses {
  getCourses() {
    return [
      { name: 'Angular', level: 'Beginner' },
      { name: 'Nest js', level: 'Beginner' },
    ];
  }
}
