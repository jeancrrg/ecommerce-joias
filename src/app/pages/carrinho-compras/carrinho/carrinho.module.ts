import { NgModule } from "@angular/core";
import { CarrinhoComponent } from "./carrinho.component";
import { CarrinhoRoutes } from "./carrinho.routes";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "src/app/shared/components/header/header.module";
import { RouterModule } from "@angular/router";
import { RippleModule } from "primeng/ripple";
import { ButtonModule } from "primeng/button";
import { MenuBarModule } from "src/app/shared/components/menu-bar/menu-bar.module";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { DataViewModule } from "primeng/dataview";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { FormsModule } from "@angular/forms";
import { ResumoCompraModule } from "../../../shared/components/resumo-compra/resumo-compra.module";

@NgModule({
    declarations: [CarrinhoComponent],
    imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    RouterModule.forChild(CarrinhoRoutes),
    ButtonModule,
    RippleModule,
    MenuBarModule,
    BreadcrumbModule,
    DataViewModule,
    InputGroupModule,
    InputGroupAddonModule,
    ResumoCompraModule
]
})
export class CarrinhoModule {}
