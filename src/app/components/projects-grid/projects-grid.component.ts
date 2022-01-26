import { Component, Injectable, NgModule, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MessageService } from 'src/app/message.service';
import {
  CdkDrag,
  CdkDragStart,
  CdkDropList,
  CdkDropListGroup,
  CdkDragMove,
  CdkDragEnter,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

import { ViewportRuler } from '@angular/cdk/overlay';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss'],
})
export class ProjectsGridComponent {
  @ViewChild(CdkDropListGroup)
  listGroup!: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList)
  placeholder!: CdkDropList;

  

   cards= this.breakpointObserver.observe(Breakpoints.Handset).pipe(
     map(
       
       ({ matches }) => {
      if (matches) {
        this.messageService.add(`Handset Device Detected`);
        
        return (response: { json: () => any; }) => response.json( [
          {
            title: 'Portfolio-App',
            colspan: 2,
            rowspan: 1,
            subtitle: "My way to learn Angular - google's frontend framework",
            img_url: 'assets/img/homepage/projects-images/Portfolio-App.jpg ',
            gh_url: 'https://github.com/khq1/Portfolio-App',
            gh_pages_url: 'https://khq1.github.io/Portfolio-App/',
            description:
              'When I typed "ng serve -o" for the first time I was curious and excited. Now few months later, after multiple commits, hundreds of hours diving deep into software development docs, I am still excited and even more curious.',
          },

          {
            title: 'QuoPic',
            colspan: 2,
            rowspan: 1,
            subtitle: 'Cafe and Clouds',
            img_url: 'assets/img/homepage/projects-images/QuoPic.jpg',
            gh_url: 'https://github.com/khq1/QuoPic',
            gh_pages_url: 'https://khq1.github.io/QuoPic/',
            description:
              'Sit back and enjoy random quotes combined with a random image, read by text to speech, build in browspaner synthesis module',
          },
          {
            title: 'Nürburgring Nordschleife',
            colspan: 2,
            rowspan: 1,
            subtitle: 'Record Lap Times',
            img_url: 'assets/img/homepage/projects-images/My-First-App.jpg',
            gh_url: 'https://github.com/khq1/My-First-App',
            gh_pages_url: 'https://khq1.github.io/My-First-App/',
            description:
              'Angular Material App that utilizes mat-autocomplete, sort and filter results with HttpService and Angular Router. Which of these cars would you pick for a late night cruise?',
          },
          {
            title: 'Responsive Gallery ',
            colspan: 2,
            rowspan: 1,
            subtitle: 'Balanced App',
            img_url: 'assets/img/homepage/projects-images/Gallery.jpg',
            gh_url: 'https://khq1.github.io/Gallery/',
            gh_pages_url: 'https://khq1.github.io/Gallery/',
            description:
              'Sit back and enjoy random quotes combined with a random image read aloud using the speech synthesis module',
          },
          {
            title: 'FutureGreenTech',
            colspan: 2,
            rowspan: 1,
            subtitle: 'Visions For A Sustainable Future.',
            img_url: 'assets/img/homepage/projects-images/FutureGreenTech.jpg',
            gh_url: 'https://github.com/khq1/FutureGreenTech',
            gh_pages_url: 'https://khq1.github.io/FutureGreenTech/',
            description:
              "Gentlemen. When I first started Reynholm Industries, I had only two things in my possession: A dream...and six million pounds. Now I have a business empire the like of which the world has never seen the like of which! I hope it doesn't sound arrogant when I say that I am the greatest man in the world -Denholm Reynholm,  IT Crowd",
          },
        ];)
      }
      this.messageService.add(`NoHandset Device`);
      return [
        {
          title: 'Portfolio-App',
          colspan: 2,
          rowspan: 1,
          subtitle: "My way to learn Angular - google's frontend framework",
          img_url: 'assets/img/homepage/projects-images/Portfolio-App.jpg ',
          gh_url: 'https://github.com/khq1/Portfolio-App',
          gh_pages_url: 'https://khq1.github.io/Portfolio-App/',
          description:
            'When I typed "ng serve -o" for the first time I was curious and excited. Now few months later, after multiple commits, hundreds of hours diving deep into software development docs, I am still excited and even more curious.',
        },
        {
          title: 'QuoPic',
          colspan: 1,
          rowspan: 1,
          subtitle: 'Cafe and Clouds',
          img_url: 'assets/img/homepage/projects-images/QuoPic.jpg',
          gh_url: 'https://github.com/khq1/QuoPic',
          gh_pages_url: 'https://khq1.github.io/QuoPic/',
          description:
            'Sit back and enjoy random quotes combined with a random image, read by text to speech, build in browspaner synthesis module',
        },
        {
          title: 'Nürburgring Nordschleife',
          colspan: 1,
          rowspan: 1,
          subtitle: 'Record Lap Times',
          img_url: 'assets/img/homepage/projects-images/My-First-App.jpg',
          gh_url: 'https://github.com/khq1/My-First-App',
          gh_pages_url: 'https://khq1.github.io/My-First-App/',
          description:
            'Angular Material App, that utilizes mat-autocomplete, sort and filter results with Http service and Angular Router. Which of these  cuties you pick for a late night cruise?',
        },
        {
          title: 'FutureGreenTech',
          colspan: 2,
          rowspan: 1,
          subtitle: 'WebSite project.',
          img_url: 'assets/img/homepage/projects-images/FutureGreenTech.jpg',
          gh_url: 'https://github.com/khq1/FutureGreenTech',
          gh_pages_url: 'https://khq1.github.io/FutureGreenTech/',
          description:
            "Gentlemen. When I first started Reynholm Industries, I had only two things in my possession: A dream...and six million pounds. Now I have a business empire the like of which the world has never seen the like of which! I hope it doesn't sound arrogant when I say that I am the greatest man in the world -Denholm Reynholm,  IT Crowd",
        },
        {
          title: 'Responsive Gallery ',
          colspan: 1,
          rowspan: 1,
          subtitle: 'Sandbox project, that ',
          img_url: 'assets/img/homepage/projects-images/Gallery.jpg',
          gh_url: 'https://khq1.github.io/Gallery/',
          gh_pages_url: 'https://khq1.github.io/Gallery/',
          description:
            "My first steps in html,css and js to create flex gallery, project is unfinished and glitchy, it's just a placeholder to populate projects section",
        },
      ];
    })
  );

  public target?: CdkDropList;
  public targetIndex!: number;
  public source?: CdkDropList;
  public sourceIndex!: number;
  public dragIndex!: number;
  public activeContainer!: CdkDropList;

  panelOpenState = false;
  colspan: number = 1;
  rowspan: number = 1;
  /** Based on the screen size, switch from standard to one column per row */
  OnExpand() {
    this.rowspan = 2;
  }
  OnCollapse() {
    this.rowspan = 1;
  }
  expanded = false;
  toggleExpanded() {
    if (this.expanded) {
      this.OnExpand();
    } else {
      this.OnCollapse();
    }
    this.expanded = !this.expanded;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private messageService: MessageService,
    private viewportRuler: ViewportRuler
  ) {
    this.target = undefined;
    this.source = undefined;
  }

  ngAfterViewInit() {
    let phElement = this.placeholder.element.nativeElement;

    phElement.style.display = 'none';
    phElement.parentElement?.removeChild(phElement);
  }


  dragMoved(e: CdkDragMove) {
    let point = this.getPointerPositionOnPage(e.event);

    this.listGroup._items.forEach((dropList) => {
      if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
        this.activeContainer = dropList;
        return;
      }
    });
  }

  dropListDropped() {
    if (!this.target) return;

    let phElement = this.placeholder.element.nativeElement;
    let parent = phElement.parentElement;

    phElement.style.display = 'none';

    parent?.removeChild(phElement);
    parent?.appendChild(phElement);
    parent?.insertBefore(
      this.source!.element.nativeElement,
      parent.children[this.sourceIndex]
    );

    this.target = undefined;
    this.source = undefined;

    if (this.sourceIndex != this.targetIndex)
      moveItemInArray(this.cards, this.sourceIndex, this.targetIndex);
    console.log('save here!', this.cards);
  }

  dropListEnterPredicate = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop == this.placeholder) return true;

    if (drop != this.activeContainer) return false;

    let phElement = this.placeholder.element.nativeElement;
    let sourceElement = drag.dropContainer.element.nativeElement;
    let dropElement = drop.element.nativeElement;

    let dragIndex = __indexOf(
      dropElement.parentElement!.children,
      this.source ? phElement : sourceElement
    );
    let dropIndex = __indexOf(dropElement.parentElement!.children, dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';

      sourceElement.parentElement!.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentElement!.insertBefore(
      phElement,
      dropIndex > dragIndex ? dropElement.nextSibling : dropElement
    );

    // this.placeholder.enter(
    //   drag,
    //   drag.element.nativeElement.offsetLeft,
    //   drag.element.nativeElement.offsetTop
    // );
    this.placeholder._dropListRef.enter(
      drag._dragRef,
      drag.element.nativeElement.offsetLeft,
      drag.element.nativeElement.offsetTop
    );

    return false;
  };

  /** Determines the point of the page that was touched by the user. */
  getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    const point = __isTouchEvent(event)
      ? event.touches[0] || event.changedTouches[0]
      : event;
    const scrollPosition = this.viewportRuler.getViewportScrollPosition();

    return {
      x: point.pageX - scrollPosition.left,
      y: point.pageY - scrollPosition.top,
    };
  }

  onClick(event: any) {
    console.log(event);
    alert('click!');
  }
}

function __indexOf(collection: HTMLCollection, node: HTMLElement) {
  return Array.prototype.indexOf.call(collection, node);
}

/** Determines whether an event is a touch event. */
function __isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
  return event.type.startsWith('touch');
}

function __isInsideDropListClientRect(
  dropList: CdkDropList,
  x: number,
  y: number
) {
  const { top, bottom, left, right } =
    dropList.element.nativeElement.getBoundingClientRect();
  return y >= top && y <= bottom && x >= left && x <= right;
}
