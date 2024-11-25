import { MenuItem } from "primeng/api";

export const listaItensMenu: MenuItem[] = [
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
        routerLink: '/pedidos'
    },
    {
        label: 'Minha Conta',
        icon: 'pi pi-fw pi-book',
    }
];
