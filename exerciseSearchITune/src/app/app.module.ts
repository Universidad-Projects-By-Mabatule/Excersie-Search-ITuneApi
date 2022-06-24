import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ITuneSearchComponent } from './itune-search/itune-search.component';
import {HttpClientModule} from '@angular/common/http'
import {HttpClientJsonpModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ITuneSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
