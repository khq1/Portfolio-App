import { Component,ViewChild, OnInit, Injectable } from '@angular/core';
import { Slide } from '../../../slide';
import { SlideService } from '../../../slide.service';
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
  interval = new FormControl(10000);
  panelOpenState = false;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = false;
  pauseOnFocus = false;
  paused = true;
  icon = '';

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

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
  
  selectedHero?: Slide;
  slides: Slide[] = [];
  
  constructor(
    private SlideService: SlideService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getSlides();
    this.messageService.add(`Carusel: getSlides()`);
  }

  getSlides(): void {
    this.SlideService.getSlides().subscribe((slides) => (this.slides = slides));
  }
}


