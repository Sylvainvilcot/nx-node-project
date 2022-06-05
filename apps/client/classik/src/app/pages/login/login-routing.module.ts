import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'sub', component: SubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
