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
            title: 'Cafe and Clouds',
            
            subtitle: 'Sit back and enjoy random quotes and images',
            img_url: 'assets/img/projects-images/QuoPic.jpg',
            gh_url: 'https://github.com/khq1/QuoPic',
            gh_pages_url: 'https://khq1.github.io/QuoPic/',
            description:
              'This my first project combining HTML, CSS and JavaScript. \n\n Site utilizes 3 APIs:\n https://quotable.io - get radom quotes \n https://picsum.photos get random image with a user window size resolution \n https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis - Web Speech API \n',
            routerLink: 'QuoPic',
          },
        ];
      }
    
      return [
        {
          title: 'Cafe and Clouds',
     
          subtitle: 'Sit back and enjoy random quotes and images',
          img_url: 'assets/img/projects-images/QuoPic.jpg',
          gh_url: 'https://github.com/khq1/QuoPic',
          gh_pages_url: 'https://khq1.github.io/QuoPic/',
          description:
            'This my first project combining HTML, CSS and JavaScript. \n\n Site utilizes 3 APIs:\n https://quotable.io - get radom quotes \n https://picsum.photos get random image with a user window size resolution \n https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis - Web Speech API \n',
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

