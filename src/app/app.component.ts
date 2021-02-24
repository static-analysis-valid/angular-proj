import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StaticAnalysis';

  constructor() {
    // Expected warning: Shadow variable
    var shadowVariable = "my shadow var";
    function print() {
      var shadowVariable = "assigned again";
      console.log(shadowVariable); // Expected warning: console.log 
    }

    // Expected warning: no-conditional-assignment
    var action = this.title = 'Spot' ? 'running' : 'sitting';
    console.log('title ', action);
    

    // Expected warning: Can't read property of null or undefined 
    // Expected warning: Unused local variable 
    let nullValue = null;
    var firstValueOfNull = nullValue.first; 
    // Expected warning: Unterminated statement 
    console.log('warn about console log ', firstValueOfNull);


    // Expected warning: Cannot assign value to the const  
  	const constVariableReasigned = 123;
    constVariableReasigned = "new value";


    // Expected warning: Type number is not assignable to type string 
    this.title = Math.floor(Math.random() * 100)
  }

  
  // Expected warning: Unused Method 
  emptyMethod() {

  }

}
