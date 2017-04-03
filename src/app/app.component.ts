import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>it Works!!!</h1>
        <a [routerLink]="['contact', 'add']">Add</a>
        <a [routerLink]="['contact', 'view']">View</a>
        <a [routerLink]="['extra']">extra</a>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {

}
