import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutes } from "./home.routes";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "src/app/shared/components/header/header.module";
import { MenuBarModule } from "../../shared/components/menu-bar/menu-bar.module";
import { DataViewModule } from "primeng/dataview";
import { CarouselModule } from "primeng/carousel";
import { RatingModule } from "primeng/rating";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { FormsModule } from "@angular/forms";
import { TooltipModule } from "primeng/tooltip";

@NgModule({
    declarations: [HomeComponent],
    imports: [
        FormsModule,
        CommonModule,
        HeaderModule,
        RouterModule.forChild(HomeRoutes),
        MenuBarModule,
        DataViewModule,
        CarouselModule,
        RatingModule,
        ButtonModule,
        RippleModule,
        TooltipModule
    ]
})
export class HomeModule {}
