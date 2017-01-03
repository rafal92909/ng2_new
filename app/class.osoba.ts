export class Osoba {
    imie: string;
    wiek: number;
    zarobki: number;

    constructor(imie: string, wiek: number, zarobki?: number) {
        this.imie = imie;
        this.wiek = wiek;
        this.zarobki = zarobki || 0;
    }

    zarobkiPlus() {
        this.zarobki += 100;
    }
    
    zarobkiMinus() {
        this.zarobki -= 100;
        if (this.zarobki < 0) {
            this.zarobki = 0;
        }
    }
}