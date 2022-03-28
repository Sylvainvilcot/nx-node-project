import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./pages/index/index.module').then(
              (m) => m.IndexModule
            ),
        }
      ],
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
