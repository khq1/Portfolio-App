import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountriesService } from 'src/app/countries.service';
import { State } from 'src/app/state';


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

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;
  myControl = new FormControl();
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
    this.filteredOptions = this.myControl.valueChanges.pipe(
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

  states: State[] = [];

  constructor() {
    countryService: CountriesService;

    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((state) => (state ? this._filterStates(state) : this.states.slice()))
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getCountryNames() {
    this.countryService
      .getStates()
      .subscribe((states: State[]) => (this.states = states));
    this.messageService.add('Country Service: OK');
  }
}
