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
        title: 'My Coding Experience:',
        image_url: '../../../assets/img/homepage/carusel-images/i1.jpg',
        description:
          "\u2022 Coding since June 2020\n\u2022 Front-end route: HTML, CSS, JavaScript, Typescript, Angular \n\u2022 Self-taught \n\u2022 I'm enthusiastic learner, aspiring for Fullstack developer position ",
        img_alt: 'Image by birgl from Pixabay',
      },
      {
        id: 2,
        title: 'Graduation',
        image_url: '../../../assets/img/homepage/carusel-images/i2.jpg',
        description:
          "\n\u2022 I graduated Geology with a master's degree at the University of Wrocław \n\u2022 Specialization: Geochemistry \n\u2022 Master Thesis: Chemistry of water of Red Water Creek - Stołowe Mountains National Park area",
        img_alt: 'Image by McElspeth from Pixabay',
      },
      {
        id: 3,
        title: 'Profesional Carrier: KGHM Cuprum R&D',
        image_url: '../../../assets/img/homepage/carusel-images/i3.jpg',
        description:
          "Exploration Geologist\n\u2022 Data digitization, database building and management \n\u2022 Custom maps, geological cross sections and profiles from interpolated data\n\u2022 Writing documentation chapters, e.g. administration, geology, mineralization characteristics, chronostratigraphy, tectonics.\n\u2022 Estimation of the mine's industrial resources - ores: copper and polimetals, nickel and brown coal, mineral salt",
        img_alt: 'Image by Malachi Witt from Pixabay',
      },
      {
        id: 4,
        title: '4. Projects:',
        image_url: '../../../assets/img/homepage/carusel-images/i4.jpg',
        description:
          '\n\u2022 Exploration projects and resource documentations\n\u2022 Tasks spanned from investor relations to approval of the Ministry of the Environment documentation \n\u2022 Cooperation on drilling projects in Poland and Germany',
        img_alt: 'Image by György Károly Tóth from Pixabay',
      },
      {
        id: 5,
        title: 'Drilling:',
        image_url: '../../../assets/img/homepage/carusel-images/i5.jpg',
        description:
          '\n\u2022 Representation of the investor on the premises of the geological and drilling works \n\u2022 Supervision and reporting of drilling works\n\u2022 consulting and expertise in the field of core drilling \n\u2022 Management of data, drill cores, samples of water, ore and gas , documents',
        img_alt: 'Image by Terry McGraw from Pixabay',
      },
      {
        id: 6,
        title: 'Arcadis (First Nuclear Power Plant in Poland Project):',
        image_url: '../../../assets/img/homepage/carusel-images/i6.jpg',
        description:
          '\n\u2022 Supervisor of the hydrological drilling rigs\n\u2022 Quality assurance in soil, rock, fluid, cores and logistics\n\u2022 Hydrogeological mesurements and monitoring \n\u2022 Periodic, formal raports',
        img_alt: 'Image by Markus Distelrath from Pixabay',
      },
      {
        id: 7,
        title: 'Chauffeuring services:',
        image_url: '../../../assets/img/homepage/carusel-images/i7.jpg',
        description:
          '\n\u2022 VIP transport in cooperation with major companies and hotels located in Wrocław \n\u2022 Ensure promptness, safety and comfort',
        img_alt: 'Image by Free-Photos from Pixabay',
      },
      {
        id: 8,
        title: 'Profesional goals:',
        image_url: '../../../assets/img/homepage/carusel-images/i8.jpg',
        description:
          '\n\u2022 Get a contract of employment as a developer\n\u2022 Join international development team, grow to create value by gaining competence\n\u2022 Become Full Stack Developer',
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
