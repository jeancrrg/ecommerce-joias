import { Routes } from '@angular/router';
import { AppLayoutComponent } from "./layout/app.layout.component";

export const AppRotas: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule) },
            { path: 'carrinho', loadChildren: () => import('./pages/meu-carrinho/carrinho/carrinho.module').then(module => module.CarrinhoModule) },
            { path: 'confirmacao-dados', loadChildren: () => import('./pages/meu-carrinho/confirmacao-dados/confirmacao-dados.module').then(module => module.ConfirmacaoDadosModule) }
        ]
    },
    { path: '**', redirectTo: '/notfound' }
];
