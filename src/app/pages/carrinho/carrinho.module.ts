import { NgModule } from "@angular/core";
import { CarrinhoComponent } from "./carrinho.component";
import { CarrinhoRoutes } from "./carrinho.routes";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "src/app/shared/components/header/header.module";
import { RouterModule } from "@angular/router";
import { RippleModule } from "primeng/ripple";
import { ButtonModule } from "primeng/button";
import { MenuBarModule } from "src/app/shared/components/menu-bar/menu-bar.module";

@NgModule({
    declarations: [CarrinhoComponent],
    imports: [
        CommonModule,
        HeaderModule,
        RouterModule.forChild(CarrinhoRoutes),
        ButtonModule,
        RippleModule,
        HeaderModule,
        MenuBarModule
    ]
})
export class CarrinhoModule {}
