import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { InitComponent } from './init/init.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
