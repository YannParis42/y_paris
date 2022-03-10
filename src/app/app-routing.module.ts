import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunesComponent } from './communes/communes.component';
import { DepartementsComponent } from './departements/departements.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
{ path:'regions', component: RegionsComponent},
{ path:'regions/:numRegion/departements', component: DepartementsComponent},
{ path:'regions/:numRegion/departements/:numDepartements/communes', component:CommunesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
