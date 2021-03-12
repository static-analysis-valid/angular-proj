import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linter-output',
  templateUrl: './linter-output.component.html',
  styleUrls: ['./linter-output.component.scss']
})
export class LinterOutputComponent implements OnInit {

  title = "Hello world";
  constructor() { }

  ngOnInit(): void {
    this.title = 1235555;
  }

}
