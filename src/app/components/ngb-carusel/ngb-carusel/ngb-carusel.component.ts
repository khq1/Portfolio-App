import { Component,ViewChild, OnInit } from '@angular/core';
import { Hero } from '../../../hero';
import { HeroService } from '../../../hero.service';
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
export class NgbCaruselComponent {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  icon = '';

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;
  
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
      this.icon = 'play';
    } else {
      this.carousel.pause();
      this.icon = 'pause';
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

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}

