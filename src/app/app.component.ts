import { Component } from '@angular/core';
  
// Expected warning: Import declared but unused 
// Expected warning: File is not a module 
import { ABSOLUTE_DOMAIN_URL, DEFAULT_COOKIE_SETTINGS } from "./globals";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StaticAnalysis';
  wrongValueAssigned: string;

  // Expected warning: property is declared but never used
  constructor(abc) {

  	let nullValue = null;
    // Expected warning: Can't read property of null or undefined 
    // Expected warning: Unused local variable 
    var firstValueOfNull = nullValue.first; 

    // Expected warning: Cannot assign value to the const  
  	const constVariableReasigned = 123;
    constVariableReasigned = "new value";

    // Expected warning: console.log 
    // Expected warning: Unterminated statement 
    console.log('warn about console log ')

    // Expected warning: Type number is not assignable to type string 
    this.wrongValueAssigned = Math.floor(Math.random() * 100); 
  }

  
  // Expected warning: Unused Method 
  emptyMethod() {

  }
}
