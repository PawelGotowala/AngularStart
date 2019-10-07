import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-witaj',
    templateUrl: './witaj.component.html',
    styleUrls: ['./witaj.component.css']
})
export class WitajComponent implements OnInit {

    inputText = 'tekst';
    maxLarge = 5;
    colorClass = 'color';
    logoUrl = '';
    isDisable = true;

    constructor() {
        setTimeout(() => {
            this.isDisable = false;
        }, 3000);
    }

    change() {
        this.inputText = 'zamian tekstu i koloru';
        this.maxLarge = 10;
        this.colorClass = 'color2';
        this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
    }

    ngOnInit() {
    }

}
