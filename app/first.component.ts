import { Component } from '@angular/core';
import { Osoba } from './class.osoba';

@Component({
    selector: 'first-component',
    templateUrl: 'app/first.component.html' ,
    styleUrls: ['app/first.component.css']
})

export class FirstComponent {
    osoby: Osoba[];

    constructor() {
        this.osoby = [
            new Osoba('Woljtek', 34, 4000), 
            new Osoba('Kasia', 44), 
            new Osoba('Zbyszek', 54, 5000), 
            new Osoba('Krzysiek', 24, 3500), 
            new Osoba('Jasio', 28, 9000), 
        ]
    }
}