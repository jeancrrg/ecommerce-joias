import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { catchError, of, tap } from 'rxjs';
import { NotificacaoService } from 'src/app/core/service/notificacao.service';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { ProdutoDTO } from 'src/app/shared/models/dto/ProdutoDTO.model';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

    listaCategorias: MenuItem[] = [];
    listaNomesBarners: string[] = [];
    listaProdutos: ProdutoDTO[] = [];

    urlTeste: string = '';

    listaProducts: Product[] = [];
    sortOrder: number = 0;
    sortField: string = '';

    constructor(
        private notificacaoService: NotificacaoService,
        private produtoService: ProdutoService,

        private productService: ProductService
    ) {}

    ngOnInit(): void {
        this.carregarCategoriasProdutos();
        this.carregarBarners();
        this.buscarProdutos(undefined, undefined);

        this.productService.getProducts().then(data => this.listaProducts = data);
    }

    carregarBarners(): void {
        this.listaNomesBarners = ['barner-blend-collection.png', 'barner-amanheci-15.png', 'barner-ametista.png'];
    }

    carregarCategoriasProdutos(): void {
        this.listaCategorias = [
            {
                label: 'Categorias',
                icon: 'pi pi-fw pi-list',
                items: [
                    {
                        label: 'Anéis',
                        icon: 'pi pi-fw pi-tag',
                        items: [
                            {
                                label: 'Anéis de Prata',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Anéis de Ouro',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Anéis com Jóia',
                                icon: 'pi pi-fw pi-bookmark'
                            }
                        ]
                    },
                    {
                        label: 'Brincos',
                        icon: 'pi pi-fw pi-tag',
                        items: [
                            {
                                label: 'Brincos de Prata',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Brincos com Pedras',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Brincos de Argola',
                                icon: 'pi pi-fw pi-bookmark'
                            }
                        ]
                    },
                    {
                        label: 'Colares',
                        icon: 'pi pi-fw pi-tag',
                        items: [
                            {
                                label: 'Colares com Pedra',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Colares de Prata',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Pingentes',
                                icon: 'pi pi-fw pi-bookmark'
                            }
                        ]
                    },
                    {
                        label: 'Pulseiras',
                        icon: 'pi pi-fw pi-tag',
                        items: [
                            {
                                label: 'Pulseiras de Prata',
                                icon: 'pi pi-fw pi-bookmark'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Meus Pedidos',
                icon: 'pi pi-fw pi-shopping-bag',
            },
            {
                label: 'Minha Conta',
                icon: 'pi pi-fw pi-book',
            }
        ];
    }

    adicionarAoCarrinho(): void {

    }

    buscarProdutos(codigo: number, nome: string): void {
        this.listaProdutos = [];
        this.produtoService.buscar(codigo, nome, true).pipe(
            tap((response) => {
                this.listaProdutos = [...response];
            }),
            catchError((error) => {
                this.notificacaoService.erro(error.error, undefined, false, 10);
                return of();
            })
        ).subscribe();
    }

}
