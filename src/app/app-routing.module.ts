import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ResidentialComponent } from './carditemdetails/residential/residential.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'residential', component: ResidentialComponent },
  { path: '', component: ProfileComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
