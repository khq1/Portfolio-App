import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';


const routes: Routes = [
  { path: 'Homepage', component: HomepageComponent },
  { path: '', redirectTo: 'Homepage', pathMatch: 'full' },
    { path: 'projects', component: ProjectsGridComponent },

  
  { path: '**', redirectTo: 'Homepage' }, // Wildcard route for a 404 page
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
