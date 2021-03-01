import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StaticAnalysis';
  constructor() {

    console.info('how about now')
    this.title = 123;
  }
}
