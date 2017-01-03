import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FirstComponent }  from './first.component';
import { SecondComponent }  from './second.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FirstComponent, SecondComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
