import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StaticAnalysis';
  constructor() {
    console.log('run linter from "package.json"') 
    this.title = 123; // mismatched typede  
    
    console.info('how about that no-console asfd')
    console.log('run linter from "package.json"') 
    console.debug('please work');
  }
}
