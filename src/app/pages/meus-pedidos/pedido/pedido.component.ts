import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pedido',
    templateUrl: './pedido.component.html',
    styleUrl: './pedido.component.scss',
})
export class PedidoComponent implements OnInit {

    numeroPedido: number = 12345;
    nomeCliente: string = 'Jean Carlo Rabelo Garcia';
    statusCliente: string = 'RESERVADO';
    dataPedido: string = '25/11/2024 12:38';

    constructor() {}

    ngOnInit(): void {

    }

}
