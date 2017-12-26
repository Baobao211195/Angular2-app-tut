import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buid-in-directive',
  templateUrl: './buid-in-directive.component.html',
  styleUrls: ['./buid-in-directive.component.css']
})
export class BuidInDirectiveComponent implements OnInit {

  display: boolean;
  display1: boolean;
  tabIndex: number;

  constructor() { }

  ngOnInit() {
  }
  changeDisplay () {
    this.display = !this.display;
  }

}
