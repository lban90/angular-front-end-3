import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // CONTEXT MAY BE home, item,
  context = 'home';
  changeContext(inputContext: string): void {
    this.context = inputContext;
  }
   consoleLog(): void {
    console.log('test')
}
}
