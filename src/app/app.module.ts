import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
