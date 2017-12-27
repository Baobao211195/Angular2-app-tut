import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  isRed: boolean;
  isSpecial: boolean;
  canSave: boolean;
  isUnchanged: boolean;
  objStyle: object;
  isActive: boolean;
  tabIndex: number;
  constructor() { }

  ngOnInit() {
    this.tabIndex  = 2;
    this.isActive  = !this.isActive;
    this.objStyle = {
      'color': this.canSave ? 'red' : 'green',        // italic
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',    // normal
      'font-size.px': !this.isSpecial ? 24 : 8,                 // with unit
    };
  }

}

