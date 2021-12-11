import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../message.service';
import { Injectable } from '@angular/core';
import { UserLoginComponent } from '../../user-login/user-login.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
@Injectable({ providedIn: 'root' })
export class MessagesComponent implements OnInit {
  name = "name";
  ToggleMessages = true;

  constructor(public messageService: MessageService) {}

  ngOnInit() {
    this.messageService.add('Message Service: OK');
  }

  ToggleMessageComponent() {
    this.ToggleMessages = !this.ToggleMessages;
  }
}

