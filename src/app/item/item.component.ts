import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    profession = 'programista';
    skill = 'Angular';

    inputP(event) {
        this.profession = event.target.value;
    }

    inputS(event) {
        this.skill = event.target.value;
    }


    ngOnInit() {
    }

}
