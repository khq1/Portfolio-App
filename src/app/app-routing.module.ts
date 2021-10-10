import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: 'app-homepage', component: HomepageComponent },
  
  { path: '',   redirectTo: 'app-homepage', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: 'app-homepage' },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [ ]
})
export class AppRoutingModule { }
