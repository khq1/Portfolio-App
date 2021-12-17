import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {Country } from "./country";

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(
    private http: HttpClient,
    private countriesManager: CountriesService
  ) {}

  getCountryNames(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>('assets/country-by-flag.json');
  }
}
