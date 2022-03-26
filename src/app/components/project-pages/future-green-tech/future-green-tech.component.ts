import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-future-green-tech',
  templateUrl: './future-green-tech.component.html',
  styleUrls: ['./future-green-tech.component.scss'],
})
export class FutureGreenTechComponent implements OnInit {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        
        return [
          
          {
            title: 'FutureGreenTech',
            colspan: 2,
            rowspan: 2,
            subtitle: 'Visions For A Sustainable Future.',
            img_url: 'assets/img/projects-images/FutureGreenTech.jpg',
            gh_url: 'https://github.com/khq1/FutureGreenTech',
            gh_pages_url: 'https://khq1.github.io/FutureGreenTech/',
            description:
              "Gentlemen. When I first started Reynholm Industries, I had only two things in my possession: A dream...and six million pounds. Now I have a business empire the like of which the world has never seen the like of which! I hope it doesn't sound arrogant when I say that I am the greatest man in the world -Denholm Reynholm,  IT Crowd",
            routerLink: 'FurtureGreenTech',
          },
        ];
      }
     
      return [
       
        {
          title: 'FutureGreenTech',
          colspan: 2,
          rowspan: 2,
          subtitle: 'WebSite project.',
          img_url: 'assets/img/projects-images/FutureGreenTech.jpg',
          gh_url: 'https://github.com/khq1/FutureGreenTech',
          gh_pages_url: 'https://khq1.github.io/FutureGreenTech/',
          description:
            "Gentlemen. When I first started Reynholm Industries, I had only two things in my possession: A dream...and six million pounds. Now I have a business empire the like of which the world has never seen the like of which! I hope it doesn't sound arrogant when I say that I am the greatest man in the world -Denholm Reynholm, IT Crowd TV Series",
          routerLink: 'FurtureGreenTech',
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

