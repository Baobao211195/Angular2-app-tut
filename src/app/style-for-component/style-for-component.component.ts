import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-style-for-component',
  templateUrl: './style-for-component.component.html',
  styleUrls: ['./style-for-component.component.css'],
  encapsulation : ViewEncapsulation.Native  /*không bao đóng component nữa => đưa style ra global*/
  // encapsulation : ViewEncapsulation.Native (không nhận style của cha cũng không nhận style của global)
  // encapsulation : ViewEncapsulation.Emulate  /* (nếu không khai báo đây là mặc định)Nhận style của global ko nhận style của component cha*/
})
export class StyleForComponentComponent implements OnInit {
  url: string;
  constructor() { }

  ngOnInit() {
    this.url = 'http://i.a4vn.com/2013/9/26/naruto-game5-hien-ngang-buoc-vao-closed-beta-091646.jpg';
  }

}
