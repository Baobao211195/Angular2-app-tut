import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BuidInDirectiveComponent } from './buid-in-directive/buid-in-directive.component';
import { StyleForComponentComponent } from './style-for-component/style-for-component.component';


@NgModule({
  declarations: [
    AppComponent,
    BuidInDirectiveComponent,
    StyleForComponentComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent] ,
})
export class AppModule { }
