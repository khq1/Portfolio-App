import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { State } from "./state";

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(
    private http: HttpClient,
    private countriesManager: CountriesService
  ) {}

  getCountryNames(): Observable<Array<State>> {
    return this.http.get<Array<State>>('assets/country-by-flag.json');
  }
}
