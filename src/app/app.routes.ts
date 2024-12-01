import { Routes } from '@angular/router';
import { AppLayoutComponent } from "./layout/app.layout.component";

export const AppRotas: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule) },
            { path: 'login', loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule) },
            { path: 'carrinho', loadChildren: () => import('./pages/carrinho-compras/carrinho/carrinho.module').then(module => module.CarrinhoModule) },
            { path: 'confirmacao-dados', loadChildren: () => import('./pages/carrinho-compras/confirmacao-dados/confirmacao-dados.module').then(module => module.ConfirmacaoDadosModule) },
            { path: 'pedidos', loadChildren: () => import('./pages/pedidos/pedidos.module').then(module => module.PedidosModule) }
        ]
    },
    { path: '**', redirectTo: '/notfound' }
];
