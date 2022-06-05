import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MatButtonModule
  ]
})
export class IndexModule { }
