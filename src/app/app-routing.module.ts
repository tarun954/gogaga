import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AuthGuard } from './gaurd/auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((m) => m.AdminModule),
      canActivate:[AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'authentication/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
