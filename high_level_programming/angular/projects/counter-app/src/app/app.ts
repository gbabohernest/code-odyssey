import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Counter App';

  count = 0;

  increaseCount (): void {
    this.count++;
  }

  decreaseCount(): void {
   this.count--;
  }

  resetCount(): void {
    this.count = 0;
  }
}
