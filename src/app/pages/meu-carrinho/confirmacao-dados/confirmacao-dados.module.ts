import { CommonModule } from "@angular/common";
import { ConfirmacaoDadosComponent } from "./confirmacao-dados.component";
import { ConfirmacaoDadosRoutes } from "./confirmacao-dados.routes";
import { FormsModule } from "@angular/forms";
import { HeaderModule } from "src/app/shared/components/header/header.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { MenuBarModule } from "src/app/shared/components/menu-bar/menu-bar.module";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ResumoCompraModule } from "src/app/shared/components/resumo-compra/resumo-compra.module";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
    declarations: [ConfirmacaoDadosComponent],
    imports: [
        CommonModule,
        FormsModule,
        HeaderModule,
        RouterModule.forChild(ConfirmacaoDadosRoutes),
        ButtonModule,
        RippleModule,
        MenuBarModule,
        BreadcrumbModule,
        InputTextModule,
        ResumoCompraModule
    ]
})
export class ConfirmacaoDadosModule {}
