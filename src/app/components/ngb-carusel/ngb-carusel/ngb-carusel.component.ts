import { Component,ViewChild, OnInit, Injectable } from '@angular/core';
import { Hero } from '../../../hero';
import { HeroService } from '../../../hero.service';
import { FormControl } from '@angular/forms';
import { MessageService } from '../../../message.service';
import {
  NgbCarouselConfig,
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ngb-carusel',
  templateUrl: './ngb-carusel.component.html',
  styleUrls: ['./ngb-carusel.component.scss'],

  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
@Injectable({ providedIn: 'root' })
export class NgbCaruselComponent {
  
  interval = new FormControl(3000);
  panelOpenState = false;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = false;
  pauseOnFocus = false;
  paused = false;
  icon = '';

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;
  heroes: Hero[] = [];

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
    
  }
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}

