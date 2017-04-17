import 'zone.js';
import 'reflect-metadata';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent }  from './components/main.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    MainComponent
  ],
  bootstrap: [ MainComponent ]
})
export class AppModule { }
