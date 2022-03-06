import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-nordschleife',
  templateUrl: './nordschleife.component.html',
  styleUrls: ['./nordschleife.component.scss'],
})
export class NordschleifeComponent implements OnInit {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.messageService.add(`Handset Device Detected`);
        return [
                    {
            title: 'Nürburgring Nordschleife',
            colspan: 2,
            rowspan: 2,
            subtitle: 'Record Lap Times',
            img_url: 'assets/img/homepage/projects-images/My-First-App.jpg',
            gh_url: 'https://github.com/khq1/My-First-App',
            gh_pages_url: 'https://khq1.github.io/My-First-App/',
            description:
              'Angular Material App that utilizes mat-autocomplete, sort and filter results with HttpService and Angular Router. Which of these cars would you pick for a late night cruise?',
            routerLink: 'Nordschleife',
          },
        ];
      }
      this.messageService.add(`NoHandset Device`);
      return [
        
        
        {
          title: 'Nürburgring Nordschleife',
          colspan: 2,
          rowspan: 2,
          subtitle: 'Record Lap Times',
          img_url: 'assets/img/homepage/projects-images/My-First-App.jpg',
          gh_url: 'https://github.com/khq1/My-First-App',
          gh_pages_url: 'https://khq1.github.io/My-First-App/',
          description:
            'Angular Material App, that utilizes mat-autocomplete, sort and filter results with Http service and Angular Router. Which of these  cuties you pick for a late night cruise?',
          routerLink: 'Nordschleife',
        },
      ];
    })
  );
  /** Based on the screen size, switch from standard to one column per row */
  panelOpenState = false;
  colspan: number = 1;
  rowspan: number = 1;
  /** Based on the screen size, switch from standard to one column per row */

  constructor(
    private breakpointObserver: BreakpointObserver,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.messageService.add('Projects: OK');
  }
}
