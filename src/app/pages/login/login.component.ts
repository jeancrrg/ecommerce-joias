import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {

    email: string;
    senha: string;

    constructor() {}

    ngOnInit(): void {

    }

}
