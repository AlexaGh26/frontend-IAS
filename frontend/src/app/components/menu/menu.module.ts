import { NgModule } from '@angular/core';
import { MenuComponent} from './menu.component'
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
    imports: [
        MatButtonModule,
        MatMenuModule,
        RouterModule,
        MatTableModule,
        MatPaginatorModule,        
    ]
})
export class MenuModule { }
