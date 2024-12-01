import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pedidos',
    templateUrl: './pedidos.component.html',
    styleUrl: './pedidos.component.scss',
})
export class PedidosComponent implements OnInit {

    numeroPedido: number = 12345;
    nomeCliente: string = 'Jean Carlo Rabelo Garcia';
    statusCliente: string = 'RESERVADO';
    dataPedido: string = '25/11/2024 12:38';

    constructor() {}

    ngOnInit(): void {

    }

}
