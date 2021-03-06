import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../message.service';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
@Injectable({ providedIn: 'root' })
export class MessagesComponent implements OnInit {
  ToggleMessages = true;
  
  constructor(public messageService: MessageService) {}

  ngOnInit() {
    this.messageService.add('Pick a theme');
  }

  ToggleMessageComponent() {
    this.ToggleMessages = !this.ToggleMessages;
  
  }
}



