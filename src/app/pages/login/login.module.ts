import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { LoginRoutes } from "./login.routes";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "src/app/shared/components/header/header.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MenuBarModule } from "src/app/shared/components/menu-bar/menu-bar.module";
import { DataViewModule } from "primeng/dataview";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { TooltipModule } from "primeng/tooltip";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { InputMaskModule } from "primeng/inputmask";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        FormsModule,
        CommonModule,
        HeaderModule,
        RouterModule.forChild(LoginRoutes),
        MenuBarModule,
        DataViewModule,
        ButtonModule,
        RippleModule,
        TooltipModule,
        InputTextModule,
        PasswordModule,
        DividerModule,
        InputMaskModule
    ]
})
export class LoginModule {}
