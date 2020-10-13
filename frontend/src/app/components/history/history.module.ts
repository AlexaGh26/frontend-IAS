import { NgModule } from '@angular/core';
import { HistoryComponent} from './history.component'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { CommonModule } from "@angular/common";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableModule } from '../table/table.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [HistoryComponent],
  exports: [HistoryComponent],
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
    ]
})
export class HistoryModule { }