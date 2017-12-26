import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BuidInDirectiveComponent } from './buid-in-directive/buid-in-directive.component';


@NgModule({
  declarations: [
    AppComponent,
    BuidInDirectiveComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent] ,
})
export class AppModule { }
