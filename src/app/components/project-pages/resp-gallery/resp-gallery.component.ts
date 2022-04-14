import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-resp-gallery',
  templateUrl: './resp-gallery.component.html',
  styleUrls: ['./resp-gallery.component.scss'],
})
export class RespGalleryComponent implements OnInit {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Responsive Gallery ',

            subtitle: 'Sandbox project, that ',
            img_url: 'assets/img/projects-images/Gallery.jpg',
            gh_url: 'https://khq1.github.io/Gallery/',
            gh_pages_url: 'https://khq1.github.io/Gallery/',
            description:
              "My first steps in html,css and js to create flex gallery, project is unfinished and glitchy, it's just a placeholder to populate projects section",
            routerLink: 'RespGallery',
          },
        ];
      }
        return [        
        {
          title: 'Responsive Gallery ',
         
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
