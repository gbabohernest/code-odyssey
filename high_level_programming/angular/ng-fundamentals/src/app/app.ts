import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataBinding} from './data-binding/data-binding';
import {Directives} from './directives/directives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBinding, Directives],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Ng Fundamentals';


}
