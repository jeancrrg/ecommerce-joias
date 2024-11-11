import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { listaCategoriasProdutos } from '../../data/listaCategoriasProdutos';

@Component({
    selector: 'menu-bar',
    templateUrl: './menu-bar.component.html',
    styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {

    listaMenuItens: MenuItem[] = [];

    constructor() {}

    ngOnInit() {
        this.listaMenuItens = listaCategoriasProdutos;
    }

}
