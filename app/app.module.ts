import 'zone.js';
import 'reflect-metadata';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/app/app.component';
import { PathwayMapComponent } from './components/pathway-map/pathway-map.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    PathwayMapComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
