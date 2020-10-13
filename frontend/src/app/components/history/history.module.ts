import { NgModule } from '@angular/core';
import { HistoryComponent} from './history.component'
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuModule } from '../menu/menu.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ModalResultCreditModalModule} from '../modal-result-credit/modal-result-credit.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';

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
        MatTabsModule,
        MenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        ModalResultCreditModalModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatGridListModule
    ]
})
export class HistoryModule { }