import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  listUser : any [];

  constructor() { }

  ngOnInit() {
    this.listUser = [
      {
        name : 'oanhpv',
        age  : 12,
        address: 'hà Nam'
      },
    {
      name : 'vankem',
      age  : 82,
      address: 'hà giang'
    },
      {
        name : 'hang',
        age  : 62,
        address: 'hà tay'
      },
      {
        name : 'minh',
        age  : 42,
        address: 'hà noi'
      }
    ];
  }

}
