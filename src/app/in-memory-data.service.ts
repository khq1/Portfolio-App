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
          "\u2022I started coding in June 2020.\n\u2022I went the front-end route: HTML, CSS, API, JavaScript, Typescipt, Angular 12.\n\u2022I love to figure out how each piece of code works, and as I learn - I'm just more curious.",
        img_alt: 'Image by birgl from Pixabay',
      },
      {
        id: 2,
        title: '2. Graduation',
        image_url: '../../../assets/img/homepage/carusel-images/i2.jpg',
        description:
          "I finished Geology with a master's degree at the University of Wrocław. Specialization: Geochemistry",
        img_alt: 'Image by McElspeth from Pixabay',
      },
      {
        id: 3,
        title: '3. Profesional Carrier:',
        image_url: '../../../assets/img/homepage/carusel-images/i3.jpg',
        description: 'KGHM Cuprum Research and Development Centre',
        img_alt: 'Image by Malachi Witt from Pixabay',
      },
      {
        id: 4,
        title: '4. Projects:',
        image_url: '../../../assets/img/homepage/carusel-images/i4.jpg',
        description: 'desc_string',
        img_alt: 'Image by György Károly Tóth from Pixabay',
      },
      {
        id: 5,
        title: '5. Drilling: ',
        image_url: '../../../assets/img/homepage/carusel-images/i5.jpg',
        description: 'desc_string5',
        img_alt: 'Image by Terry McGraw from Pixabay',
      },
      {
        id: 6,
        title: '6. Nuclear Power Plant:',
        image_url: '../../../assets/img/homepage/carusel-images/i6.jpg',
        description: 'desc_string',
        img_alt: 'Image by Markus Distelrath from Pixabay',
      },
      {
        id: 7,
        title: '7. Transport:',
        image_url: '../../../assets/img/homepage/carusel-images/i7.jpg',
        description: 'desc_string6',
        img_alt: 'Image by Free-Photos from Pixabay',
      },
      {
        id: 8,
        title: '8. Goals:',
        image_url: '../../../assets/img/homepage/carusel-images/i8.jpg',
        description: 'desc_string',
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
