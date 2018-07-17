import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { LiquidContainersModule } from '../../src/liquid-containers.module';

//Materials
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonToggleModule
} from '@angular/material/';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollBoxEx1Component } from './scroll-box-ex1/scroll-box-ex1.component';
import { ShiftBoxEx1Component } from './shift-box-ex1/shift-box-ex1.component';
import { ComboEx1Component } from './combo-ex1/combo-ex1.component';


const appRoutes: Routes = [
  { path: "", component: ScrollBoxEx1Component },
  { path: "example1", component: ScrollBoxEx1Component },
  { path: "example2", component: ShiftBoxEx1Component },
  { path: "example3", component: ComboEx1Component },
  { path: "**", component: ScrollBoxEx1Component }
];


@NgModule({
  declarations: [
    AppComponent,
    ScrollBoxEx1Component,
    ShiftBoxEx1Component,
    ComboEx1Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    LiquidContainersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
