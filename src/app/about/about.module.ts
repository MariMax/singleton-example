import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
      }
    ])

  ],
  declarations: [AboutComponent],
  providers:[UserService]
})
export class AboutModule { }
