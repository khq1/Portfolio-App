import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        title: '1. My Coding Experience:',
        image_url: '../../../assets/img/homepage/carusel-images/i1.jpg',
        description:
          "\u2022I started coding in June 2020\n\u2022I went the front-end route: HTML, CSS, API, JavaScript, Typescipt, Angular 12\n\u2022I love to figure out how each piece of code works\n\u2022 and when I learn - I'm just become more curious",
        img_alt: 'Image by birgl from Pixabay',
      },
      {
        id: 2,
        title: '2. Graduation',
        image_url: '../../../assets/img/homepage/carusel-images/i2.jpg',
        description:
          "\n\u2022I finished Geology with a master's degree at the University of Wrocław \n\u2022Specialization: Geochemistry \n\u2022 Master Thesis: Geochemisty & Hyrology ",
        img_alt: 'Image by McElspeth from Pixabay',
      },
      {
        id: 3,
        title: '3. Profesional Carrier: KGHM Cuprum R&D',
        image_url: '../../../assets/img/homepage/carusel-images/i3.jpg',
        description:
          'Exploration Geologist\n\u2022Data digitization and database management \n\u2022Custom maps, geological cross sections and profiles from interpolated data\n\u2022writing chapters of documentation\n\u2022Mine resource estimation – copper, silver, coal, nickel and others',
        img_alt: 'Image by Malachi Witt from Pixabay',
      },
      {
        id: 4,
        title: '4. Projects:',
        image_url: '../../../assets/img/homepage/carusel-images/i4.jpg',
        description:
          '\n\u2022Preparation of exploration projects and resource documentations\n\u2022Tasks spaned from investor relations to approval of ministry of the environment \n\u2022Support for drilling projects in Poland and Germany',
        img_alt: 'Image by György Károly Tóth from Pixabay',
      },
      {
        id: 5,
        title: '5. Drilling:',
        image_url: '../../../assets/img/homepage/carusel-images/i5.jpg',
        description:
          '\n\u2022Investor representation\n\u2022Drill site supervise & reporting\n\u2022Onsite core drill consulting and expertise\n\u2022Management of cores and data',
        img_alt: 'Image by Terry McGraw from Pixabay',
      },
      {
        id: 6,
        title: '6. Arcadis for PGE EJ (First Nuclear Power Plant in Poland):',
        image_url: '../../../assets/img/homepage/carusel-images/i6.jpg',
        description:
          '\n\u2022Hydro-geological monitoring\n\u2022Drill site supervising\n\u2022Quality assurance in sampling and logistics, reporting',
        img_alt: 'Image by Markus Distelrath from Pixabay',
      },
      {
        id: 7,
        title: '7. Transport:',
        image_url: '../../../assets/img/homepage/carusel-images/i7.jpg',
        description:
          '\n\u2022VIP transport in cooperation with major companies and hotels located in Wrocław \n\u2022Ensuring promptness, safety and comfort',
        img_alt: 'Image by Free-Photos from Pixabay',
      },
      {
        id: 8,
        title: '8. Goals:',
        image_url: '../../../assets/img/homepage/carusel-images/i8.jpg',
        description:
          '\n\u2022Get a contract of employment as a developer\n\u2022Become Full Stack Developer \n\u2022Publish, manage, and distribute my app worldwide',
        img_alt: 'Image by borozdor from Pixabay',
      },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
