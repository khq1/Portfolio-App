import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';


import { NordschleifeComponent } from './components/project-pages/nordschleife/nordschleife.component';
import { PortfolioComponent } from './components/project-pages/portfolio/portfolio.component';
import { QuoPicComponent } from './components/project-pages/quo-pic/quo-pic.component';
import { FutureGreenTechComponent } from './components/project-pages/future-green-tech/future-green-tech.component';
import { RespGalleryComponent } from './components/project-pages/resp-gallery/resp-gallery.component';

import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';


const routes: Routes = [
  { path: 'Homepage', component: HomepageComponent },
  { path: '', redirectTo: 'Homepage', pathMatch: 'full' },
  { path: 'Projects', component: ProjectsGridComponent },
  
  { path: 'Nordschleife', component: NordschleifeComponent },
  { path: 'FutureGreenTech', component: FutureGreenTechComponent },
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'QuoPic', component: QuoPicComponent },
  { path: 'RespGallery', component: RespGalleryComponent },

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
