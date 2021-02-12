import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { RegistrationModule } from './components/registration/registration.module';
import { RegisModule } from './components/regis/regis.module';
import { LayoutModule } from './components/layout/layout.module';
import { CommonModule } from "@angular/common";
import { HistoryModule } from './components/history/history.module';
import { HttpClientModule } from '@angular/common/http';
import { ExampleModule } from './pages/example/example.module';

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
    HttpClientModule,
    ExampleModule,
    RegisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
