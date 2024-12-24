import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { FormsModule } from '@angular/forms';
import { OrderListModule } from 'primeng/orderlist';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        CommonModule,
        FormsModule,
        ToolbarModule,
        InputGroupModule,
        InputGroupAddonModule,
        ButtonModule,
        RippleModule,
        RouterModule,
        BadgeModule,
        OrderListModule
    ]
})
export class HeaderModule {}
