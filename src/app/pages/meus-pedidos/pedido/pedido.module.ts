import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "src/app/shared/components/header/header.module";
import { DataViewModule } from "primeng/dataview";
import { CarouselModule } from "primeng/carousel";
import { RatingModule } from "primeng/rating";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { FormsModule } from "@angular/forms";
import { TooltipModule } from "primeng/tooltip";
import { PedidoComponent } from "./pedido.component";
import { PedidoRoutes } from "./pedido.routes";
import { MenuBarModule } from "src/app/shared/components/menu-bar/menu-bar.module";

@NgModule({
    declarations: [PedidoComponent],
    imports: [
        FormsModule,
        CommonModule,
        HeaderModule,
        RouterModule.forChild(PedidoRoutes),
        MenuBarModule,
        DataViewModule,
        CarouselModule,
        RatingModule,
        ButtonModule,
        RippleModule,
        TooltipModule,
        HeaderModule,
        MenuBarModule
    ]
})
export class PedidoModule {}
