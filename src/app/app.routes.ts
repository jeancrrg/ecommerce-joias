import { Routes } from '@angular/router';
import { AppLayoutComponent } from "./layout/app.layout.component";

export const AppRotas: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule) },
            { path: 'carrinho', loadChildren: () => import('./pages/carrinho/carrinho.module').then(module => module.CarrinhoModule) }
        ]
    },
    { path: '**', redirectTo: '/notfound' }
];
