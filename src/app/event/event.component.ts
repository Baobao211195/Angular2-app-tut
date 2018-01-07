import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  /*
  * Angular 2 cung cấp một object tên là $event, khi nó được truyền vào
  * là tham số của hàm handle event thì bạn có thể
  * truy cập vào các thuộc tính mà nó chứa trong đó,
  * chẳng hạn event cho keyboard, mouse.
   *
   * */
  constructor() { }
  values = '';
  ngOnInit() {
  }

  onKey(event) {
    console.log(event.target.value);
    this.values = event.target.value;
  }

}
