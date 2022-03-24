import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/countries.service';
import { MessageService } from 'src/app/message.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

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
  dialogRef: any;

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  OnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private messageService: MessageService
  ) {}

  ToggleMessages = true;

 
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Name',
      lastName: 'Lastname',
      address: {
        street: 'Street',
        city: 'City ',
        state: 'State/Country',
        zip: '0101010101',
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

    console.log(this.profileForm.value);
    this.messageService.add(this.profileForm.value);
  }
}