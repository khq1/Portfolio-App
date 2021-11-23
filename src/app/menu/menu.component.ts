import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CounterDataComponent } from '../components/counter-data/counter-data.component';
import { Router } from '@angular/router';
import { ViewChildren } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { Option } from ".././option.model";
import { ThemeService } from ".././theme.service";
import { MessageService } from "src/app/message.service";
import { MatBadgeModule } from '@angular/material/badge';


export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 800,
  hideDelay: 100,
  touchendHideDelay: 200,
  position: 'right',
  touchGestures: 'auto',
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [CounterDataComponent,
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
  ],
})

export class MenuComponent implements OnInit {
  
  @Input('matTooltipHideDelay')
  

  
  TooltipPosition = 'right';
  TooltipTouchGestures = 'auto';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()

    );

  @ViewChildren('tooltip')
  tooltips!: { _results: any[] };

  items = [];
  show!: boolean;

  showAllTooltips() {
    this.show = !this.show;
    if (this.show) {
      setTimeout(() => {
        this.tooltips._results.forEach((item) => item.show());
      }, 5);
      this.messageService.add("All tooltips showing");
    } else {
      this.tooltips._results.forEach((item) => item.hide());
      this.messageService.add("All tooltips hidden");
    }
  }
  
  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private readonly themeService: ThemeService,
    private messageService: MessageService

  ) { }
  
  ngOnInit() {
    this.themeService.setTheme("pink-bluegray");
    this.messageService.add("Theme switch: OK");

  }


  themeChangeHandler(themeToSet: string) {
    this.themeService.setTheme(themeToSet);
  }


  
  public buttonClick(fragment: string): void {
    this.router.navigate(['/app-homepage']).then(() => {
      window.location.hash = fragment;
      this.messageService.add('Navigating to ' + fragment);
    });
  }
}