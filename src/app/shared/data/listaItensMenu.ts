import { MenuItem } from "primeng/api";

export const listaItensMenu: MenuItem[] = [
    {
        label: 'Categorias',
        icon: 'pi pi-fw pi-list',
        items: [
            {
                label: 'Anéis',
                items: [
                    { label: 'Anéis de Prata' },
                    { label: 'Anéis de Ouro' },
                    { label: 'Anéis com Jóia' }
                ]
            },
            {
                label: 'Brincos',
                items: [
                    { label: 'Brincos de Prata' },
                    { label: 'Brincos com Pedras' },
                    { label: 'Brincos de Argola' }
                ]
            },
            {
                label: 'Colares',
                items: [
                    { label: 'Colares com Pedra' },
                    { label: 'Colares de Prata' },
                    { label: 'Pingentes' }
                ]
            },
            {
                label: 'Pulseiras',
                items: [
                    { label: 'Pulseiras de Prata' }
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
