import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MenuModule} from '../../components/menu/menu.module'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RegisModule } from 'src/app/components/regis/regis.module';


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
       MatMenuModule,
       MatButtonModule,
       MenuModule,
       MatTableModule,
       MatPaginatorModule,
       RegisModule,
    ]
})
export class HomeModule { }
