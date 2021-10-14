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
        id: 11,
        title: 'title_string1',
        image_url: '../../../assets/img/homepage/carusel-images/i1.jpg',
        description: 'desc_string1',
        img_alt: 'Photo by Ann-Kathrin Rehse from FreeImages',
      },
      {
        id: 12,
        title: 'title_string2',
        image_url: '../../../assets/img/homepage/carusel-images/i2.jpg',
        description: 'desc_string2',
        img_alt: 'Photo by James Farmer from FreeImages',
      },
      {
        id: 13,
        title: 'title_string3',
        image_url: '../../../assets/img/homepage/carusel-images/i3.jpg',
        description: 'desc_string3',
        img_alt: 'img_alt_string',
      },
      {
        id: 14,
        title: 'title_string',
        image_url: '../../../assets/img/homepage/carusel-images/i4.jpg',
        description: 'desc_string',
        img_alt: 'img_alt_string',
      },
      {
        id: 15,
        title: 'title_string5',
        image_url: '../../../assets/img/homepage/carusel-images/i5.jpg',
        description: 'desc_string5',
        img_alt: 'img_alt_string',
      },
      {
        id: 16,
        title: 'title_string',
        image_url: '../../../assets/img/homepage/carusel-images/i6.jpg',
        description: 'desc_string',
        img_alt: 'img_alt_string',
      },
      {
        id: 17,
        title: 'title_string6',
        image_url: '../../../assets/img/homepage/carusel-images/i7.jpg',
        description: 'desc_string6',
        img_alt: 'img_alt_string',
      },
      {
        id: 18,
        title: 'title_string',
        image_url: '../../../assets/img/homepage/carusel-images/i8.jpg',
        description: 'desc_string',
        img_alt: 'img_alt_string',
      },
      {
        id: 19,
        title: 'title_string',
        image_url: '../../../assets/img/homepage/carusel-images/i9.jpg',
        description: 'desc_string',
        img_alt: 'img_alt_string',
      },
      {
        id: 20,
        title: 'title_string',
        image_url: '../../../assets/img/homepage/carusel-images/i10.jpg',
        description: 'desc_string',
        img_alt: 'img_alt_string',
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
