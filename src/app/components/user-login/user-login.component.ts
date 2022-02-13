import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountriesService } from 'src/app/countries.service';
import { Country } from 'src/app/country';
import { MessageService } from 'src/app/message.service';
import { MatDialog } from '@angular/material/dialog';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

export interface User {

  
  title: string;
}


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  titleForm = new FormControl();
  countryForm = new FormControl();
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
  filteredCountries!: Observable<Country[]>;
  dialogRef: any;

  countries: Country[] = [];

  OnInit(): void {}

  displayFn(user: User): string {
    return user && user.title ? user.title : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private countriesService: CountriesService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getCountries();
    this.messageService.add(`Countries: OK`);
  }

  getCountries(): void {
    this.countriesService
      .getCountries()
      .subscribe((countries) => (this.countries = countries));

    this.filteredOptions = this.titleForm.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.title)),
      map((title) => (title ? this._filter(title) : this.options.slice()))
    );

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
  private _filter(title: string): User[] {
    const filterValue = title.toLowerCase();

    return this.options.filter((option) =>
      option.title.toLowerCase().includes(filterValue)
    );
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Bill',
      lastName: 'Wilson',
      address: {
        street: 'Central Park',
        city: 'New York',
        state: 'New York',
        zip: '10026',
      },
    });
  }

  /*
      addAlias() {
        this.aliases.push(this.fb.control(''));
      }
    */
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.messageService.add(this.profileForm.value);
  }
}

