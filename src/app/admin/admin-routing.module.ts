 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { PackageformComponent } from './packageform/packageform.component';
import { AddleadsComponent } from './addleads/addleads.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './layout/admin/admin.component';
import { LeadsComponent } from './leads/leads.component';  
import { ProductlistComponent } from './productlist/productlist.component';
import { ProfilesComponent } from './profiles/profiles.component'; 

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
       { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
       {
           path: 'dashboard',
           component: DashboardComponent
         },
      {
        path: 'dashboard',
        component: DashboardComponent
      },{
        path: 'leads',
        component: LeadsComponent
      },
      {
        path: 'addlead',
        component: AddleadsComponent
      },
      {
        path:'profile',
        component: ProfilesComponent
      },
      {
        path: 'packages',
        component: ProductlistComponent
      },
      {
        path: 'addpackage',
        component: PackageformComponent
      },
      {
        path: 'profile',
        component: ProfilesComponent
      }, 
      {
        path: 'itinerary',
        loadChildren: () =>
          import('./itinarires/itinarires.module').then((m) => m.ItinariresModule),
      },
      {
        path: 'bookings',
        loadChildren: () =>
          import('./bookings/bookings.module').then((m) => m.BookingsModule),
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./accounts/accounts.module').then((m) => m.AccountsModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'hr',
        loadChildren: () =>
          import('./hr/hr.module').then((m) => m.HrModule),
      },
      {
        path: 'partner',
        loadChildren: () =>
          import('./partners/partners.module').then((m) => m.PartnersModule),
      },
      {
        path: 'customersupport',
        loadChildren: () =>
          import('./customer-support/customer-support.module').then((m) => m.CustomerSupportModule),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('./support/support.module').then((m) => m.SupportModule),
      },
      {
        path:'right',
        loadChildren: ()=>
        import('./rightbar/rightbar.module').then((m) => m.RightbarModule),
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
