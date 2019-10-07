import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-witaj',
    templateUrl: './witaj.component.html',
    styleUrls: ['./witaj.component.css']
})
export class WitajComponent implements OnInit {

    inputText = '';
    maxLarge = 5;
    colorClass = 'color';
    logoUrl = '';
    isDisable = true;


    change() {
        this.inputText = 'zamian tekstu i koloru';
        this.maxLarge = 10;
        this.colorClass = 'color2';
        this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
    }

    onFocus() {
        this.colorClass = 'color2';
    }

    onClick(event) {
        console.log(event);
    }

    onMouseMove(event) {
        console.log('x:' + event.clientX + 'y:' + event.clientY);
    }

    onPaste() {
        this.inputText = 'nie wklejaj, wpisz';
    }

    change2() {
        this.isDisable = false;
    }

    ngOnInit() {
    }

}
