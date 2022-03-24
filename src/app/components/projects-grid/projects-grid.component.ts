import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss'],
})
export class ProjectsGridComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.messageService.add(`Handset Detected`);
        return [
          {
            title: "Jan's Code",
            colspan: 2,
            rowspan: 1,
            subtitle: "My way to learn Angular - google's frontend framework",
            img_url: 'assets/img/projects-images/Portfolio-App.jpg ',
            gh_url: 'https://github.com/khq1/Portfolio-App',
            gh_pages_url: 'https://khq1.github.io/Portfolio-App/',
            description:
              'When I typed "ng serve -o" for the first time I was curious and excited. Now few months later, after multiple commits, hundreds of hours diving deep into software development docs, I am still excited and even more curious.',
            routerLink: 'Portfolio',
          },

          {
            title: 'Cafe and Clouds',
            colspan: 2,
            rowspan: 1,
            subtitle: 'Inspire Yourself Daily',
            img_url: 'assets/img/projects-images/QuoPic.jpg',
            gh_url: 'https://github.com/khq1/QuoPic',
            gh_pages_url: 'https://khq1.github.io/QuoPic/',
            description:
              'Sit back and enjoy random quotes combined with a random image, TTS, build in browspaner synthesis module',
            routerLink: 'QuoPic',
          },
          {
            title: 'Nürburgring Nordschleife',
            colspan: 2,
            rowspan: 1,
            subtitle: 'Record Lap Times',
            img_url: 'assets/img/projects-images/My-First-App.jpg',
            gh_url: 'https://github.com/khq1/My-First-App',
            gh_pages_url: 'https://khq1.github.io/My-First-App/',
            description:
              'Angular Material App that utilizes mat-autocomplete, sort and filter results with HttpService and Angular Router. Which of these cars would you pick for a late night cruise?',
            routerLink: 'Nordschleife',
          },
          {
            title: 'Responsive Gallery ',
            colspan: 2,
            rowspan: 1,
            subtitle: 'Balanced App',
            img_url: 'assets/img/projects-images/Gallery.jpg',
            gh_url: 'https://khq1.github.io/Gallery/',
            gh_pages_url: 'https://khq1.github.io/Gallery/',
            description:
              'Sit back and enjoy random quotes combined with a random image read aloud using the speech synthesis module',
            routerLink: 'RespGallery',
          },
          {
            title: 'FutureGreenTech',
            colspan: 2,
            rowspan: 1,
            subtitle: 'Visions For A Sustainable Future.',
            img_url: 'assets/img/projects-images/FutureGreenTech.jpg',
            gh_url: 'https://github.com/khq1/FutureGreenTech',
            gh_pages_url: 'https://khq1.github.io/FutureGreenTech/',
            description:
              "Gentlemen. When I first started Reynholm Industries, I had only two things in my possession: A dream...and six million pounds. Now I have a business empire the like of which the world has never seen the like of which! I hope it doesn't sound arrogant when I say that I am the greatest man in the world -Denholm Reynholm,  IT Crowd",
            routerLink: 'FutureGreenTech',
          },
        ];
      }
      this.messageService.add(`NoHandset Detected`);
      return [
        {
          title: 'Portfolio-App',
          colspan: 1,
          rowspan: 1,
          subtitle: "My way to learn Angular - google's frontend framework",
          img_url: 'assets/img/projects-images/Portfolio-App.jpg ',
          gh_url: 'https://github.com/khq1/Portfolio-App',
          gh_pages_url: 'https://khq1.github.io/Portfolio-App/',
          description:
            'When I typed "ng serve -o" for the first time I was curious and excited. Now few months later, after multiple commits, hundreds of hours diving deep into software development docs, I am still excited and even more curious.',
          routerLink: 'Portfolio',
        },
        {
          title: 'Cafe and Clouds',
          colspan: 1,
          rowspan: 1,
          subtitle: 'Inspire Yourself Daily',
          img_url: 'assets/img/projects-images/QuoPic.jpg',
          gh_url: 'https://github.com/khq1/QuoPic',
          gh_pages_url: 'https://khq1.github.io/QuoPic/',
          description:
            'Sit back and enjoy random quotes combined with a random image, TTS, build in browspaner synthesis module',
          routerLink: 'QuoPic',
        },
        {
          title: 'Nürburgring Nordschleife',
          colspan: 1,
          rowspan: 1,
          subtitle: 'Record Lap Times',
          img_url: 'assets/img/projects-images/My-First-App.jpg',
          gh_url: 'https://github.com/khq1/My-First-App',
          gh_pages_url: 'https://khq1.github.io/My-First-App/',
          description:
            'Angular Material App, that utilizes mat-autocomplete, sort and filter results with Http service and Angular Router. Which of these  cuties you pick for a late night cruise?',
          routerLink: 'Nordschleife',
        },
        {
          title: 'FutureGreenTech',
          colspan: 1,
          rowspan: 1,
          subtitle: 'WebSite project.',
          img_url: 'assets/img/projects-images/FutureGreenTech.jpg',
          gh_url: 'https://github.com/khq1/FutureGreenTech',
          gh_pages_url: 'https://khq1.github.io/FutureGreenTech/',
          description:
            "Gentlemen. When I first started Reynholm Industries, I had only two things in my possession: A dream...and six million pounds. Now I have a business empire the like of which the world has never seen the like of which! I hope it doesn't sound arrogant when I say that I am the greatest man in the world -Denholm Reynholm, IT Crowd",
          routerLink: 'FutureGreenTech',
        },
        {
          title: 'Responsive Gallery ',
          colspan: 1,
          rowspan: 1,
          subtitle: 'Sandbox project, that ',
          img_url: 'assets/img/projects-images/Gallery.jpg',
          gh_url: 'https://khq1.github.io/Gallery/',
          gh_pages_url: 'https://khq1.github.io/Gallery/',
          description:
            "My first steps in html,css and js to create flex gallery, project is unfinished and glitchy, it's just a placeholder to populate projects section",
          routerLink: 'RespGallery',
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
