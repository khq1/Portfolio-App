import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CounterDataComponent } from '../components/counter-data/counter-data.component';
import { Router } from '@angular/router';
import { ViewChildren } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [CounterDataComponent],
})
export class MenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );
    
  @ViewChildren('tooltip')
  tooltips!: { _results: any[]; };

  items = [{ comment: "Comment1" }, { comment: "Comment2" }, { comment: "Comment3" }]
  show!: boolean;

  showAllTooltips() {
    this.show = !this.show;
    if (this.show) {
      setTimeout(() => {
        this.tooltips._results.forEach(item => item.show());
      }, 5)
    } else {
      this.tooltips._results.forEach(item => item.hide());
    }
  }




  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }
  
   public buttonClick(fragment: string): void {
    this.router.navigate(['/app-homepage']).then(() => {
      window.location.hash = fragment;
    });
  

     {
     
    }
    }ngOnInit() {
  }
}


