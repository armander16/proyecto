import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GruposComponent } from './grupos/grupos.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EmpleadosComponent,
    GruposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
