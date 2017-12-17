import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ /*Dùng để khai báo các thành phần: components,
   directives and pipes mà nó thuộc về Module đó*/
    AppComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ ], /*Khi làm việc với Dependency injection,
   chúng ta cần khai báo các Services cho Injector thực hiện việc nạp các dependencies.*/
  bootstrap: [AppComponent] /*Khi định nghĩa root Module, chúng ta cần nói cho Angular biết chương trình cần bắt đầu ở đâu*/
})
export class AppModule { }
