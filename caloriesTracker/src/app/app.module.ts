import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { InputpageComponent } from './components/inputpage/inputpage.component';
import { ResultpageComponent } from './components/resultpage/resultpage.component';
import { ServicepageComponent } from './components/servicepage/servicepage.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import {HttpClientModule} from '@angular/common/http'

import { DataAccessingService } from './services/DataAccessingService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    InputpageComponent,
    ResultpageComponent,
    ServicepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [DataAccessingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
