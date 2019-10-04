import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Test wyświetlania';
    date = new Date();

    dog = new Dog('Reksio', 2) ;

    showDog() {
        return 'Moj piest to' + this.dog.name + 'i ma ' + this.dog.age ;
    }
}

class Dog {
     constructor(public name: string, public age: number) {
    }
}
