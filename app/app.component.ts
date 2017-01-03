import { Component } from '@angular/core';
import { FirstComponent } from './first.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  name: string;
  constructor() {
    this.name = 'Dupa';
  }  
}
