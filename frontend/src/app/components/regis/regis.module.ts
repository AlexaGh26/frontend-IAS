import { NgModule } from '@angular/core';
import { MenuModule } from '../menu/menu.module';
import { RegisComponent } from './regis.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [RegisComponent],
  exports: [RegisComponent],
    imports: [
        MenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatRadioModule
    ]
})
export class RegisModule { }

