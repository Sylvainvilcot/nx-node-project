import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          canActivate: [AuthGuard],
          path: '',
          loadChildren: () =>
            import('./pages/index/index.module').then(
              (m) => m.IndexModule
            ),
        },
        {
          path: 'auth',
          loadChildren: () =>
            import('./pages/login/login.module').then(
              (m) => m.LoginModule
            )
        }
      ],
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
