import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "src/app/shared/components/header/header.module";
import { DataViewModule } from "primeng/dataview";
import { RatingModule } from "primeng/rating";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { FormsModule } from "@angular/forms";
import { TooltipModule } from "primeng/tooltip";
import { PedidosComponent } from "./pedidos.component";
import { PedidosRoutes } from "./pedidos.routes";
import { MenuBarModule } from "src/app/shared/components/menu-bar/menu-bar.module";

@NgModule({
    declarations: [PedidosComponent],
    imports: [
        FormsModule,
        CommonModule,
        HeaderModule,
        RouterModule.forChild(PedidosRoutes),
        MenuBarModule,
        DataViewModule,
        RatingModule,
        ButtonModule,
        RippleModule,
        TooltipModule
    ]
})
export class PedidosModule {}
