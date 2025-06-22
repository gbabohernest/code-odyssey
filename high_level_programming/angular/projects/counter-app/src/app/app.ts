import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Counter App';

  count = signal(0);

  increaseCount (): void {
    this.count.update(val => val + 1);
  }

  decreaseCount(): void {
    this.count.set(this.count() - 1);
  }

  resetCount(): void {
    this.count.set(0);
  }
}
