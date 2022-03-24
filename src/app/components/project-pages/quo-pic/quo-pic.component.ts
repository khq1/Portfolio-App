import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-quo-pic',
  templateUrl: './quo-pic.component.html',
  styleUrls: ['./quo-pic.component.scss'],
})
export class QuoPicComponent implements OnInit {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
      
        return [
          

          {
            title: 'QuoPic',
            colspan: 2,
            rowspan: 2,
            subtitle: 'Cafe and Clouds',
            img_url: 'assets/img/projects-images/QuoPic.jpg',
            gh_url: 'https://github.com/khq1/QuoPic',
            gh_pages_url: 'https://khq1.github.io/QuoPic/',
            description:
              'Sit back and enjoy random quotes combined with a random image, read by text to speech, build in browspaner synthesis module',
            routerLink: 'QuoPic',
          },
         
        ];
      }
    
      return [
        
        {
          title: 'QuoPic',
          colspan: 2,
          rowspan: 2,
          subtitle: 'Cafe and Clouds',
          img_url: 'assets/img/projects-images/QuoPic.jpg',
          gh_url: 'https://github.com/khq1/QuoPic',
          gh_pages_url: 'https://khq1.github.io/QuoPic/',
          description:
            'Sit back and enjoy random quotes combined with a random image, read by text to speech, build in browspaner synthesis module',
          routerLink: 'QuoPic',
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

