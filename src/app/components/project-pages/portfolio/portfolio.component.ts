import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
      
        return [
          {
            title: 'Portfolio-App',
            colspan: 2,
            rowspan: 2,
            subtitle: "My way to learn Angular - google's frontend framework",
            img_url: 'assets/img/projects-images/Portfolio-App.jpg ',
            gh_url: 'https://github.com/khq1/Portfolio-App',
            gh_pages_url: 'https://khq1.github.io/Portfolio-App/',
            description:
              'When I typed "ng serve -o" for the first time I was curious and excited. Now few months later, after multiple commits, hundreds of hours diving deep into software development docs, I am still excited and even more curious.',
            routerLink: 'Portfolio',
          },
        ];
      }
      this.messageService.add(`NoHandset Device`);
      return [
        {
          title: 'Portfolio-App',
          colspan: 2,
          rowspan: 2,
          subtitle: "My way to learn Angular - google's frontend framework",
          img_url: 'assets/img/projects-images/Portfolio-App.jpg ',
          gh_url: 'https://github.com/khq1/Portfolio-App',
          gh_pages_url: 'https://khq1.github.io/Portfolio-App/',
          description:
            'When I typed "ng serve -o" for the first time I was curious and excited. Now few months later, after multiple commits, hundreds of hours diving deep into software development docs, I am still excited and even more curious.',
          routerLink: 'Portfolio',
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
  
  }
}
