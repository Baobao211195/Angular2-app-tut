import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url: string;
  title: string;

  constructor() {
  }

  ngOnInit() {
    this.url = 'http://i.a4vn.com/2013/9/26/naruto-game5-hien-ngang-buoc-vao-closed-beta-091646.jpg';
    this.title = 'pham van oanh';
  }


}
