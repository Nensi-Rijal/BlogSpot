import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import(`./home/home.module`).then(
      module => module.HomeModule
    )
  },
  {
    path: 'admin',
    loadChildren: () => import(`./admin/admin.module`).then(
      module => module.AdminModule
    )
  },

  { path: '',   redirectTo: '/home/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
