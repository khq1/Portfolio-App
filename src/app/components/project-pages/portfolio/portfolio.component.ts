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
              "When I typed 'ng serve -o' for the first time I was curious and excited. \n \n Now, few months later, after multiple commits, hundreds of hours diving deep into software development docs, I am still excited and even more curious.\n \n Project was inspired by material.angular.io and theme picker. I saw it and wanted it on my site. It's currently inmpemented with CSS, but SCSS or SASS with BEM will be my current choice.\n\n features:\nUser Login - FormArray\nTooltips button - toggle tooltips\nMessage service\nCustom date pipe \nTheme switch - added custom themes \n bootstrap carusel with RxJs, Http service \n Responsive project grid - Device detection \n and many more",
              
            routerLink: 'Portfolio',
          },
        ];
      }
      
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
            "When I typed 'ng serve -o' for the first time I was curious and excited. \n \n Now, few months later, after multiple commits, hundreds of hours diving deep into software development docs, I am still excited and even more curious.\n \n Project was inspired by material.angular.io and theme picker. I saw it and wanted it on my site. It's currently inmpemented with CSS, but SCSS or SASS with BEM will be my current choice.\n\n features:\nUser Login - FormArray\nTooltips button - toggle tooltips\nMessage service\nCustom date pipe \nTheme switch - added custom themes \n bootstrap carusel with RxJs, Http service \n Responsive project grid - device detection \n and many more",
          routerLink: 'Portfolio',
        },
      ];
    })
  );
 
  constructor(
    private breakpointObserver: BreakpointObserver,
    private messageService: MessageService
  ) {}
  ngOnInit() {
  
  }
}
