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
        
        return [
          {
            title: 'Nordschleife Record Laps',
            subtitle: 'Record Lap Times',
            img_url: 'assets/img/projects-images/My-First-App.jpg',
            gh_url: 'https://github.com/khq1/My-First-App',
            gh_pages_url: 'https://khq1.github.io/My-First-App/',
            description:
              'Angular Material \n\n MatAutocompleteModule \n MatCardModule \n MatGridListModule\nHttpClientModule\nAppRoutingModule\n and many more.\n\n Which of these cars would you pick for a late night cruise?',
            routerLink: 'Nordschleife',
          },
        ];
      }
      
      return [
        {
          title: 'Nordschleife Record Laps',
          subtitle: 'Record Lap Times',
          img_url: 'assets/img/projects-images/My-First-App.jpg',
          gh_url: 'https://github.com/khq1/My-First-App',
          gh_pages_url: 'https://khq1.github.io/My-First-App/',
          description:
            'Angular Material \n\n MatAutocompleteModule \n MatCardModule \n MatGridListModule\nHttpClientModule\nAppRoutingModule\n and many more.\n\n Which of these cars would you pick for a late night cruise?',
          routerLink: 'Nordschleife',
        },
      ];
    })
  );
 
  panelOpenState = false;


  constructor(
    private breakpointObserver: BreakpointObserver,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    
  }
}
