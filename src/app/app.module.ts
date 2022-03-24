import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CounterDataComponent } from './components/counter-data/counter-data.component';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCaruselComponent } from './components/ngb-carusel/ngb-carusel/ngb-carusel.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';
import { MessagesComponent } from './components/messages/messages.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTabsModule } from '@angular/material/tabs';
import { StyleManagerService } from './style-manager.service';
import { ThemeService } from './theme.service';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PortfolioComponent } from './components/project-pages/portfolio/portfolio.component';
import { NordschleifeComponent } from './components/project-pages/nordschleife/nordschleife.component';
import { FutureGreenTechComponent } from './components/project-pages/future-green-tech/future-green-tech.component';
import { QuoPicComponent } from './components/project-pages/quo-pic/quo-pic.component';
import { RespGalleryComponent } from './components/project-pages/resp-gallery/resp-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    CounterDataComponent,
    NgbCaruselComponent,
    MessagesComponent,
    ProjectsGridComponent,
    ThemeSwitchComponent,
    UserLoginComponent,
    FileTreeComponent,
    ContactPageComponent,
    PortfolioComponent,
    NordschleifeComponent,
    FutureGreenTechComponent,
    QuoPicComponent,
    RespGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    NgbModule,
    FormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    DragDropModule,
    MatTooltipModule,
    ClipboardModule,
    MatTabsModule,
    MatBadgeModule,
    MatDialogModule,
    MatGridListModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatTreeModule,

  ],
  providers: [
    
    NgbCarouselConfig,
    StyleManagerService,
    ThemeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
