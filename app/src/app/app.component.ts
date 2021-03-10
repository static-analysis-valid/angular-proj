import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StaticAnalysis';
  constructor() {
    console.debug('asdf')
    this.title = 123
    
    console.info('hello world')
    // detect missing console.log
    console.log('no semi')
  }
}
