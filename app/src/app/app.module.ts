import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinterOutputComponent } from './linter-output/linter-output.component';

@NgModule({
  declarations: [
    AppComponent,
    LinterOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    console.log("don't look at me")
  }
}
