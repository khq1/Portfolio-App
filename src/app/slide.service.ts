import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Slide } from "./slide";


@Injectable({
  providedIn: 'root'
})
export class SlideService {


  constructor(
    private http: HttpClient,
      ) { }

  getSlides(): Observable<Array<Slide>> {
    return this.http.get<Array<Slide>>("assets/slides.json");
  }
}