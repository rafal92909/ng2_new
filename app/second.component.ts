import { Component, Input } from '@angular/core';
import { Osoba } from './class.osoba';

@Component ({
    selector: 'second-component',
    templateUrl: 'app/second.component.html'
})

export class SecondComponent {
    @Input() osoba: Osoba;

    zwiekszZarobki() {
        this.osoba.zarobkiPlus();
    }

    zmniejszZarobki() {
        this.osoba.zarobkiMinus();
    }
}
