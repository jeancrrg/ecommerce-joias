import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

    @Input()
    quantidadeItensCarrinho: number;

    constructor() {}

    ngOnInit(): void {}

    pesquisar(): void {}

}
