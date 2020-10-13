import { NgModule } from '@angular/core';
import { modalResultCreditComponent} from './modal-result-credit.component'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { CommonModule } from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableModule } from '../table/table.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [modalResultCreditComponent],
  exports: [modalResultCreditComponent],
    imports: [
        MatButtonModule,
        MatMenuModule,
        RouterModule,
        MenuModule,
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        TableModule,
        MatTabsModule,
        MatDialogModule,
    ]
})
export class ModalResultCreditModalModule { }