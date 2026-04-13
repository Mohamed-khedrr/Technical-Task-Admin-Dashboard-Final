import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard-module').then((m) => m.DashboardModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('./features/orders/orders-module').then((m) => m.OrdersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
