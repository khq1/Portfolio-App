import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


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
        return [
          {
            title: 'QuoPic',
            cols: 1,
            rows: 1,
            subtitle: 'Cafe and Clouds',
            img_url: "../../../assets/img/homepage/projects-images/QuoPic.jpg",
            gh_url: 'https://github.com/khq1/QuoPic',
            gh_pages_url: 'https://khq1.github.io/QuoPic/',
            description:
              'Sit back and enjoy random quotes combined with a random image read aloud using the speech synthesis module',
          },
          {
            title: 'Porsche',
            cols: 1,
            rows: 1,
            subtitle: 'The App',
            img_url: "../../../assets/img/homepage/projects-images/My-First-App.jpg",
            gh_url: 'https://github.com/khq1/My-First-App',
            gh_pages_url: 'https://khq1.github.io/My-First-App/',
            description:
              'Simple site',
          },
          {
            title: 'Responsive Gallery ',
            cols: 1,
            rows: 1,
            subtitle: 'Balanced App',
            img_url: "../../../assets/img/homepage/projects-images/Gallery.jpg",
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
            img_url: '../../../assets/img/homepage/projects-images/FutureGreenTech.jpg',
            gh_url: 'https://github.com/khq1/FutureGreenTech',
            gh_pages_url: 'https://khq1.github.io/FutureGreenTech/',
            description:
              "Gentlemen. When I first started Reynholm Industries, I had only two things in my possession: A dream...and six million pounds. Now I have a business empire the like of which the world has never seen the like of which! I hope it doesn't sound arrogant when I say that I am the greatest man in the world —Denholm Reynholm, seconds before committing suicide ",
          },
        ];
      }

      return [
        {
          title: 'QuoPic',
          cols: 2,
          rows: 2,
          subtitle: 'Cafe and Clouds',
          img_url: "../../../assets/img/homepage/projects-images/QuoPic.jpg",
          gh_url: 'https://github.com/khq1/QuoPic',
          gh_pages_url: 'https://khq1.github.io/QuoPic/',
          description:
            'Sit back and enjoy random quotes combined with a random image read aloud using the speech synthesis module',
        },
        {
          title: 'Porsche',
          cols: 2,
          rows: 2,
          subtitle: 'The App',
          img_url: "../../../assets/img/homepage/projects-images/My-First-App.jpg",
          gh_url: 'https://github.com/khq1/My-First-App',
          gh_pages_url: 'https://khq1.github.io/My-First-App/',
          description:
            'Simple site',
        },
        {
          title: 'Responsive Gallery ',
          cols: 2,
          rows: 1,
          subtitle: 'Balanced App',
          img_url: "../../../assets/img/homepage/projects-images/Gallery.jpg",
          gh_url: 'https://khq1.github.io/Gallery/',
          gh_pages_url: 'https://khq1.github.io/Gallery/',
          description:
            'Sit back and enjoy random quotes combined with a random image read aloud using the speech synthesis module',
        },
        {
          title: 'FutureGreenTech',
          cols: 2,
          rows: 1,
          subtitle: 'Visions For A Sustainable Future.',
          img_url: '../../../assets/img/homepage/projects-images/FutureGreenTech.jpg',
          gh_url: 'https://github.com/khq1/FutureGreenTech',
          gh_pages_url: 'https://khq1.github.io/FutureGreenTech/',
          description:
            "Gentlemen. When I first started Reynholm Industries, I had only two things in my possession: A dream...and six million pounds. Now I have a business empire the like of which the world has never seen the like of which! I hope it doesn't sound arrogant when I say that I am the greatest man in the world —Denholm Reynholm, seconds before committing suicide ",
        },
      ];

    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
