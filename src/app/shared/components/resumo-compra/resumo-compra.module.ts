import { NgModule } from "@angular/core";
import { ResumoCompraComponent } from "./resumo-compra.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";

@NgModule({
    declarations: [ResumoCompraComponent],
    exports: [ResumoCompraComponent],
    imports: [
        CommonModule,
        ButtonModule,
        RippleModule,
    ]
})
export class ResumoCompraModule {}
