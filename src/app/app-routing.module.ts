import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InitComponent } from './init/init.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: InitComponent
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
      }
    ])
  ],
  declarations: []
})
export class AppRoutingModule { }
