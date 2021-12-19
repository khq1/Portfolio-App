import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountriesService } from 'src/app/countries.service';
import { Country } from 'src/app/country';


export interface User {
  title: string;
}


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  [x: string]: any;
  countryForm = new FormControl();
  filteredCountries: Observable<Country[]>;
  loginForm = new FormControl();
  options: User[] = [
    { title: 'Sir' },
    { title: 'Madam' },
    { title: 'Mr' },
    { title: 'Mrs' },
    { title: 'Ms' },
    { title: 'Miss' },
    { title: 'Dr' },
    { title: 'Professor' },
  ];
  filteredOptions!: Observable<User[]>;
  dialogRef: any;
  name!: string;

  ngOnInit(): void {
    this.filteredOptions = this.loginForm.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );
  }

  displayFn(user: User): string {
    return user && user.title ? user.title : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.title.toLowerCase().includes(filterValue)
    );
  }

  countries: Country[] = [];

  constructor() {
    this.filteredCountries = this.countryForm.valueChanges.pipe(
      startWith(''),
      map((country) =>
        country ? this._filterCountries(country) : this.countries.slice()
      )
    );
  }

  private _filterCountries(value: string): Country[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter((country) =>
      country.name.toLowerCase().includes(filterValue)
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getCountryNames() {
    this.CountriesService.getCountries().subscribe(
      (countries: Country[]) => (this.countries = countries)
    );
    this.messageService.add('Country Service: OK');
  }
}