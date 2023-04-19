import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PharmacistComponent } from './component/pharmacist/pharmacist.component';
import { TechnicanComponent } from './component/technican/technican.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"pharmacist",component:PharmacistComponent},
  {path:"technican",component:TechnicanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
