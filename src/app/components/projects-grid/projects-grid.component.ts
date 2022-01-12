import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MessageService } from 'src/app/message.service';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss'],
})
export class ProjectsGridComponent {

 
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.messageService.add(`Projects - 1 column View`);
        return [
          {
            title: 'Portfolio-App',
            cols: 2,
            rows: 2,
            subtitle: "My way to learn Angular - google's frontend framework",
            img_url: 'assets/img/homepage/projects-images/Portfolio-App.jpg ',
            gh_url: 'https://github.com/khq1/Portfolio-App',
            gh_pages_url: 'https://khq1.github.io/Portfolio-App/',
            description:
              'When I typed "ng serve -o" for the first time I was curious and excited. Now few months later, after multiple commits, hundreds of hours diving deep into software development docs, I am still excited and even more curious.',
          },

          {
            title: 'QuoPic',
            cols: 2,
            rows: 2,
            subtitle: 'Cafe and Clouds',
            img_url: 'assets/img/homepage/projects-images/QuoPic.jpg',
            gh_url: 'https://github.com/khq1/QuoPic',
            gh_pages_url: 'https://khq1.github.io/QuoPic/',
            description:
              'Sit back and enjoy random quotes combined with a random image, read by text to speech, build in browser synthesis module',
          },
          {
            title: 'Nürburgring Nordschleife',
            cols: 2,
            rows: 2,
            subtitle: 'Record Lap Times',
            img_url: 'assets/img/homepage/projects-images/My-First-App.jpg',
            gh_url: 'https://github.com/khq1/My-First-App',
            gh_pages_url: 'https://khq1.github.io/My-First-App/',
            description:
              'Angular Material App, that utilizes mat-autocomplete, sort and filter results with Http service and Angular Router. Which of these  cuties you pick for a late night cruise?',
          },
          {
            title: 'Responsive Gallery ',
            cols: 2,
            rows: 2,
            subtitle: 'Balanced App',
            img_url: 'assets/img/homepage/projects-images/Gallery.jpg',
            gh_url: 'https://khq1.github.io/Gallery/',
            gh_pages_url: 'https://khq1.github.io/Gallery/',
            description:
              'Sit back and enjoy random quotes combined with a random image read aloud using the speech synthesis module',
          },
          {
            title: 'FutureGreenTech',
            cols: 1,
            rows: 1,
            subtitle: 'Visions For A Sustainable Future.',
            img_url: 'assets/img/homepage/projects-images/FutureGreenTech.jpg',
            gh_url: 'https://github.com/khq1/FutureGreenTech',
            gh_pages_url: 'https://khq1.github.io/FutureGreenTech/',
            description:
              "Gentlemen. When I first started Reynholm Industries, I had only two things in my possession: A dream...and six million pounds. Now I have a business empire the like of which the world has never seen the like of which! I hope it doesn't sound arrogant when I say that I am the greatest man in the world -Denholm Reynholm,  IT Crowd",
          },
        ];
      }
      this.messageService.add(`Projects - 2 columns View`);
      return [
        {
          title: 'Portfolio-App',
          cols: 1,
          rows: 1,
          subtitle: "My way to learn Angular - google's frontend framework",
          img_url: 'assets/img/homepage/projects-images/Portfolio-App.jpg ',
          gh_url: 'https://github.com/khq1/Portfolio-App',
          gh_pages_url: 'https://khq1.github.io/Portfolio-App/',
          description:
            'When I typed "ng serve -o" for the first time I was curious and excited. Now few months later, after multiple commits, hundreds of hours diving deep into software development docs, I am still excited and even more curious.',
        },
        {
          title: 'QuoPic',
          cols: 1,
          rows: 1,
          subtitle: 'Cafe and Clouds',
          img_url: 'assets/img/homepage/projects-images/QuoPic.jpg',
          gh_url: 'https://github.com/khq1/QuoPic',
          gh_pages_url: 'https://khq1.github.io/QuoPic/',
          description:
            'Sit back and enjoy random quotes combined with a random image, read by text to speech, build in browser synthesis module',
        },
        {
          title: 'Nürburgring Nordschleife',
          cols: 1,
          rows: 1,
          subtitle: 'Record Lap Times',
          img_url: 'assets/img/homepage/projects-images/My-First-App.jpg',
          gh_url: 'https://github.com/khq1/My-First-App',
          gh_pages_url: 'https://khq1.github.io/My-First-App/',
          description:
            'Angular Material App, that utilizes mat-autocomplete, sort and filter results with Http service and Angular Router. Which of these  cuties you pick for a late night cruise?',
        },
        {
          title: 'Responsive Gallery ',
          cols: 1,
          rows: 1,
          subtitle: 'Answered my question: Can I code what I want?',
          img_url: 'assets/img/homepage/projects-images/Gallery.jpg',
          gh_url: 'https://khq1.github.io/Gallery/',
          gh_pages_url: 'https://khq1.github.io/Gallery/',
          description:
            "My first steps in html,css and js to create flex gallery, project is unfinished and glitchy, it's just a placeholder to populate projects section",
        },
        {
          title: 'FutureGreenTech',
          cols: 1,
          rows: 1,
          subtitle: 'Visions For A Sustainable Future.',
          img_url: 'assets/img/homepage/projects-images/FutureGreenTech.jpg',
          gh_url: 'https://github.com/khq1/FutureGreenTech',
          gh_pages_url: 'https://khq1.github.io/FutureGreenTech/',
          description:
            "Gentlemen. When I first started Reynholm Industries, I had only two things in my possession: A dream...and six million pounds. Now I have a business empire the like of which the world has never seen the like of which! I hope it doesn't sound arrogant when I say that I am the greatest man in the world -Denholm Reynholm,  IT Crowd",
        },
      ];

    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private messageService: MessageService) { }
  ngOnInit() {

    this.messageService.add("Projects: OK");

  }
}