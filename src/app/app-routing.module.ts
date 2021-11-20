import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/hero/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/hero/heroes/heroes.component';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';
import { InMemoryDataService } from './in-memory-data.service';

const routes: Routes = [
  { path: 'app-homepage', component: HomepageComponent },
  { path: '', redirectTo: 'app-homepage', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'projects', component: ProjectsGridComponent },
  { path: 'api', component: InMemoryDataService },
  { path: 'heroes', component: HeroesComponent }, // redirect to `first-component`
  { path: '**', redirectTo: 'app-homepage' }, // Wildcard route for a 404 page
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: "reload",
}
  
@NgModule({
  imports: [RouterModule.forRoot(routes ,routerOptions,)],
  exports: [RouterModule],
   declarations: [ ]
})
export class AppRoutingModule { }
