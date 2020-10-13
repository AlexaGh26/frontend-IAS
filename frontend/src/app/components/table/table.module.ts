import { NgModule } from '@angular/core';
import {TableComponent} from './table.component'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MenuModule} from '../../components/menu/menu.module'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
       MatMenuModule,
       MatButtonModule,
       MenuModule,
       MatTableModule,
       MatPaginatorModule,
    ]
})
export class TableModule { }