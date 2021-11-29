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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCaruselComponent } from './components/ngb-carusel/ngb-carusel/ngb-carusel.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { MessagesComponent } from './components/hero/messages/messages.component';
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

    

    MatGridListModule,
    MatMenuModule,
    
  ],
  providers: [StyleManagerService, ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
