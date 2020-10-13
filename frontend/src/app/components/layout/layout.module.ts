import { NgModule } from '@angular/core';
import { LayoutComponent} from './layout.component'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { HomeModule } from 'src/app/pages/home/home.module';
import {TableModule} from '../table/table.module'

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
    imports: [
        MatButtonModule,
        MatMenuModule,
        RouterModule,
        MenuModule,
        HomeModule,
        TableModule,
    ]
})
export class LayoutModule { }