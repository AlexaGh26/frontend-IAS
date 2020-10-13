import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { RegistrationModule } from './components/registration/registration.module';
import { LayoutModule } from './components/layout/layout.module';
import { CommonModule } from "@angular/common";
import { HistoryModule } from './components/history/history.module';
import { ModalResultCreditModalModule } from './components/modal-result-credit/modal-result-credit.module';
import {CreditService} from './services/credit.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    RegistrationModule,
    LayoutModule,
    CommonModule,
    HistoryModule,
    ModalResultCreditModalModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
