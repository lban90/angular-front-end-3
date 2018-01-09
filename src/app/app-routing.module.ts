import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardItemComponent} from './item/dashboard-item.component';

const routes:  Routes = [
  {
    path: 'itemDashboard',
    component: DashboardItemComponent
  }
  ];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class  AppRoutingModule {
}

