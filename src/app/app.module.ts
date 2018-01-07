import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BuidInDirectiveComponent } from './buid-in-directive/buid-in-directive.component';
import { StyleForComponentComponent } from './style-for-component/style-for-component.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    BuidInDirectiveComponent,
    StyleForComponentComponent,
    NgStyleComponent,
    EventComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent] ,
})
export class AppModule { }
