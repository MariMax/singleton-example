import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { InitComponent } from './init/init.component';
import { UserService } from './user.service';

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
  providers:[UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
