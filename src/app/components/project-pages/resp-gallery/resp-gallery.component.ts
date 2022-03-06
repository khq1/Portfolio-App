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
        this.messageService.add(`Handset Device Detected`);
        return [
          
          {
            title: 'Responsive Gallery ',
            colspan: 2,
            rowspan: 2,
            subtitle: 'Balanced App',
            img_url: 'assets/img/homepage/projects-images/Gallery.jpg',
            gh_url: 'https://khq1.github.io/Gallery/',
            gh_pages_url: 'https://khq1.github.io/Gallery/',
            description:
              'Sit back and enjoy random quotes combined with a random image read aloud using the speech synthesis module',
            routerLink: 'RespGallery',
          },
        ];
      }
      this.messageService.add(`NoHandset Device`);
      return [
        
        {
          title: 'Responsive Gallery ',
          colspan: 2,
          rowspan: 2,
          subtitle: 'Sandbox project, that ',
          img_url: 'assets/img/homepage/projects-images/Gallery.jpg',
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
    this.messageService.add('Projects: OK');
  }
}
