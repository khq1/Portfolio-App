import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/hero/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/hero/heroes/heroes.component';

const routes: Routes = [
  { path: 'app-homepage', component: HomepageComponent },
  
  { path: '', redirectTo: 'app-homepage', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }, // redirect to `first-component`
  { path: '**', redirectTo: 'app-homepage' },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [ ]
})
export class AppRoutingModule { }
