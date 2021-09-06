import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
children: [
  {path: 'main', component: MainPageComponent},
  {path: 'blog/:id', component: DetailsComponent}
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
